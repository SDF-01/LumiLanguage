import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildHiragana } from "./word-pools/hiragana.mjs";
import { buildKatakana } from "./word-pools/katakana.mjs";
import { buildKanji } from "./word-pools/kanji.mjs";
import { buildToeic } from "./word-pools/toeic.mjs";
import { isLatinRomaji, looksLikeFillerMeaning } from "./word-pools/kana-romaji.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "src", "content", "words-of-the-day", "data");
const TARGET = 1000;
const PER_DAY = 5;

function uniqBy(items, keyFn) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const k = keyFn(item);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(item);
  }
  return out;
}

function assertQuality(pool, track) {
  for (const w of pool) {
    if (!w.word || !w.meaningEn || !w.explanationEn) {
      throw new Error(`${track}: incomplete entry ${JSON.stringify(w)}`);
    }
    if (looksLikeFillerMeaning(w.meaningEn)) {
      throw new Error(`${track}: filler meaning for ${w.word}: ${w.meaningEn}`);
    }
    if (w.reading) {
      const r = w.reading.replace(/\s*\/\s*/g, " ").replace(/・/g, " ");
      if (!isLatinRomaji(r)) {
        throw new Error(
          `${track}: reading must be latin romaji for ${w.word}: ${w.reading}`,
        );
      }
      if (w.reading === w.word) {
        throw new Error(`${track}: reading repeats word for ${w.word}`);
      }
    }
  }
}

function trimToDays(pool) {
  const n = Math.floor(pool.length / PER_DAY) * PER_DAY;
  return pool.slice(0, n);
}

fs.mkdirSync(outDir, { recursive: true });

const hiragana = trimToDays(uniqBy(buildHiragana(TARGET * 2), (w) => w.word));
const katakana = trimToDays(uniqBy(buildKatakana(TARGET * 2), (w) => w.word));
const kanji = trimToDays(uniqBy(buildKanji(TARGET * 2), (w) => w.word));

assertQuality(hiragana, "hiragana");
assertQuality(katakana, "katakana");
assertQuality(kanji, "kanji");

const jpSimpleMeanings = new Set();
for (const pool of [hiragana, katakana, kanji]) {
  for (const w of pool) {
    const m = w.meaningEn.toLowerCase().split("/")[0].trim();
    if (
      m &&
      !m.includes(" ") &&
      !/(drill|practice|fluency|loanword|compound|modern|reading)/.test(m)
    ) {
      jpSimpleMeanings.add(m);
    }
  }
}

const toeic = trimToDays(
  uniqBy(buildToeic(TARGET, jpSimpleMeanings), (w) => w.word.toLowerCase()),
);
assertQuality(toeic, "toeic");

const all = [...hiragana, ...katakana, ...kanji, ...toeic];
const wordKeys = new Set();
const ids = new Set();
for (const w of all) {
  if (ids.has(w.id)) throw new Error(`Duplicate id: ${w.id}`);
  ids.add(w.id);
  if (wordKeys.has(w.word)) throw new Error(`Duplicate word across pools: ${w.word}`);
  wordKeys.add(w.word);
}

for (const [name, pool] of [
  ["hiragana", hiragana],
  ["katakana", katakana],
  ["kanji", kanji],
  ["toeic", toeic],
]) {
  if (pool.length < PER_DAY) {
    throw new Error(`${name} pool too small: ${pool.length}`);
  }
}

fs.writeFileSync(path.join(outDir, "hiragana.json"), JSON.stringify(hiragana));
fs.writeFileSync(path.join(outDir, "katakana.json"), JSON.stringify(katakana));
fs.writeFileSync(path.join(outDir, "kanji.json"), JSON.stringify(kanji));
fs.writeFileSync(path.join(outDir, "toeic.json"), JSON.stringify(toeic));

console.log("Generated daily-word pools (real vocab only, latin romaji):", {
  hiragana: hiragana.length,
  katakana: katakana.length,
  kanji: kanji.length,
  toeic: toeic.length,
  uniqueWords: wordKeys.size,
  days: {
    hiragana: hiragana.length / PER_DAY,
    katakana: katakana.length / PER_DAY,
    kanji: kanji.length / PER_DAY,
    toeic: toeic.length / PER_DAY,
  },
});
