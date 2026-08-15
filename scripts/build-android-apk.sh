#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export ANDROID_EXPORT=1
export ANDROID_HOME="${ANDROID_HOME:-$HOME/android-sdk}"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export PATH="$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH"

echo "→ Static export for Capacitor"
rm -rf out
npx next build
rm -rf out/downloads

if [[ ! -d android ]]; then
  echo "→ Adding Capacitor Android platform"
  npx cap add android
fi

echo "sdk.dir=$ANDROID_HOME" > android/local.properties
echo "→ Sync web assets into Android"
npx cap sync android
node scripts/patch-android-signing.mjs

KEYSTORE_DIR="$ROOT/android/keystore"
KEYSTORE="$KEYSTORE_DIR/lumi-sideload.jks"
mkdir -p "$KEYSTORE_DIR"
if [[ ! -f "$KEYSTORE" ]]; then
  echo "→ Creating sideload keystore"
  keytool -genkeypair -v \
    -keystore "$KEYSTORE" \
    -alias lumi \
    -keyalg RSA \
    -keysize 2048 \
    -validity 10000 \
    -storepass lumilearn \
    -keypass lumilearn \
    -dname "CN=LUMI, OU=LumiLanguage, O=LUMI, L=Tokyo, ST=Tokyo, C=JP"
fi

cat > "$ROOT/android/keystore.properties" <<EOF
storeFile=keystore/lumi-sideload.jks
storePassword=lumilearn
keyAlias=lumi
keyPassword=lumilearn
EOF

echo "→ Gradle release APK"
(
  cd android
  chmod +x ./gradlew
  ./gradlew assembleRelease --no-daemon
)

APK_SRC="$ROOT/android/app/build/outputs/apk/release/app-release.apk"
DEST_DIR="$ROOT/public/downloads"
mkdir -p "$DEST_DIR"
cp "$APK_SRC" "$DEST_DIR/lumi-japanese.apk"
echo "→ APK ready at public/downloads/lumi-japanese.apk"
ls -lh "$DEST_DIR/lumi-japanese.apk"
