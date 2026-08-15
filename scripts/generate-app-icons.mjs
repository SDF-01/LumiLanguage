import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const iconSvg = await readFile(path.join(root, "public/icons/icon.svg"));
const foregroundSvg = await readFile(
  path.join(root, "public/icons/lumi-foreground.svg"),
);

async function png(svg, size, dest, transparent = false) {
  await mkdir(path.dirname(dest), { recursive: true });
  const image = sharp(svg, { density: 384 }).resize(size, size, {
    fit: "contain",
    background: transparent
      ? { r: 0, g: 0, b: 0, alpha: 0 }
      : { r: 64, g: 200, b: 200, alpha: 1 },
  });
  await writeFile(dest, await image.png().toBuffer());
}

const launchers = [
  ["mipmap-mdpi", 48],
  ["mipmap-hdpi", 72],
  ["mipmap-xhdpi", 96],
  ["mipmap-xxhdpi", 144],
  ["mipmap-xxxhdpi", 192],
];

const foregrounds = [
  ["mipmap-mdpi", 108],
  ["mipmap-hdpi", 162],
  ["mipmap-xhdpi", 216],
  ["mipmap-xxhdpi", 324],
  ["mipmap-xxxhdpi", 432],
];

await png(iconSvg, 192, path.join(root, "public/icons/icon-192.png"));
await png(iconSvg, 512, path.join(root, "public/icons/icon-512.png"));

for (const [folder, size] of launchers) {
  const dir = path.join(root, "android/app/src/main/res", folder);
  await png(iconSvg, size, path.join(dir, "ic_launcher.png"));
  await png(iconSvg, size, path.join(dir, "ic_launcher_round.png"));
}

for (const [folder, size] of foregrounds) {
  const dest = path.join(
    root,
    "android/app/src/main/res",
    folder,
    "ic_launcher_foreground.png",
  );
  await png(foregroundSvg, size, dest, true);
}

console.log("Wrote Lumi owl icons for web and Android");
