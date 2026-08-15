import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const gradlePath = join(root, "android/app/build.gradle");
const manifestPath = join(root, "android/app/src/main/AndroidManifest.xml");

if (!existsSync(gradlePath)) {
  console.error("android/app/build.gradle missing — run npx cap add android first");
  process.exit(1);
}

let gradle = readFileSync(gradlePath, "utf8");
if (!gradle.includes("keystore.properties")) {
  gradle = gradle.replace(
    "android {",
    `def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {`,
  );
  gradle = gradle.replace(
    "defaultConfig {",
    `signingConfigs {
        release {
            if (keystorePropertiesFile.exists()) {
                storeFile rootProject.file(keystoreProperties["storeFile"])
                storePassword keystoreProperties["storePassword"]
                keyAlias keystoreProperties["keyAlias"]
                keyPassword keystoreProperties["keyPassword"]
            }
        }
    }
    defaultConfig {`,
  );
  gradle = gradle.replace(
    /buildTypes \{\s*release \{/,
    `buildTypes {
        release {
            signingConfig signingConfigs.release`,
  );
  writeFileSync(gradlePath, gradle);
  console.log("patched android/app/build.gradle signing");
}

let manifest = readFileSync(manifestPath, "utf8");
const permissions = [
  '    <uses-permission android:name="android.permission.RECORD_AUDIO" />',
  '    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />',
];
for (const line of permissions) {
  if (!manifest.includes(line.trim())) {
    manifest = manifest.replace(
      "<application",
      `${line}\n    <application`,
    );
  }
}
if (!manifest.includes("android.permission.INTERNET")) {
  manifest = manifest.replace(
    "<application",
    '    <uses-permission android:name="android.permission.INTERNET" />\n    <application',
  );
}
writeFileSync(manifestPath, manifest);
console.log("patched AndroidManifest permissions");
