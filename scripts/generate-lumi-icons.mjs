import { mkdir, readFile, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const appSvg = path.join(root, "public/icons/lumi-app.svg");
const foreSvg = path.join(root, "public/icons/lumi-foreground.svg");

async function pngFromSvg(svgPath, size, dest, background) {
  const svg = await readFile(svgPath);
  let pipeline = sharp(svg, { density: 384 }).resize(size, size);
  if (background) pipeline = pipeline.flatten({ background });
  await pipeline.png().toFile(dest);
}

async function main() {
  await mkdir(path.join(root, "public/icons"), { recursive: true });
  await copyFile(appSvg, path.join(root, "public/icons/icon.svg"));
  await pngFromSvg(appSvg, 192, path.join(root, "public/icons/icon-192.png"));
  await pngFromSvg(appSvg, 512, path.join(root, "public/icons/icon-512.png"));

  const launchers = [
    ["mipmap-mdpi", 48, 108],
    ["mipmap-hdpi", 72, 162],
    ["mipmap-xhdpi", 96, 216],
    ["mipmap-xxhdpi", 144, 324],
    ["mipmap-xxxhdpi", 192, 432],
  ];

  for (const [folder, launcher, foreground] of launchers) {
    const dir = path.join(root, "android/app/src/main/res", folder);
    await mkdir(dir, { recursive: true });
    await pngFromSvg(appSvg, launcher, path.join(dir, "ic_launcher.png"));
    await pngFromSvg(appSvg, launcher, path.join(dir, "ic_launcher_round.png"));
    await pngFromSvg(
      foreSvg,
      foreground,
      path.join(dir, "ic_launcher_foreground.png"),
    );
  }

  await writeFile(
    path.join(root, "android/app/src/main/res/values/ic_launcher_background.xml"),
    `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">#40C8C8</color>
</resources>
`,
  );

  console.log("LUMI owl icons written");
}

await main();
