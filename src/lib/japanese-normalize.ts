/** Longest-first romaji → hiragana for beginner speech matching. */
const ROMAJI_TO_HIRA: [string, string][] = [
  ["kya", "きゃ"],
  ["kyu", "きゅ"],
  ["kyo", "きょ"],
  ["gya", "ぎゃ"],
  ["gyu", "ぎゅ"],
  ["gyo", "ぎょ"],
  ["sha", "しゃ"],
  ["shu", "しゅ"],
  ["sho", "しょ"],
  ["sya", "しゃ"],
  ["syu", "しゅ"],
  ["syo", "しょ"],
  ["ja", "じゃ"],
  ["ju", "じゅ"],
  ["jo", "じょ"],
  ["jya", "じゃ"],
  ["jyu", "じゅ"],
  ["jyo", "じょ"],
  ["cha", "ちゃ"],
  ["chu", "ちゅ"],
  ["cho", "ちょ"],
  ["tya", "ちゃ"],
  ["tyu", "ちゅ"],
  ["tyo", "ちょ"],
  ["nya", "にゃ"],
  ["nyu", "にゅ"],
  ["nyo", "にょ"],
  ["hya", "ひゃ"],
  ["hyu", "ひゅ"],
  ["hyo", "ひょ"],
  ["bya", "びゃ"],
  ["byu", "びゅ"],
  ["byo", "びょ"],
  ["pya", "ぴゃ"],
  ["pyu", "ぴゅ"],
  ["pyo", "ぴょ"],
  ["mya", "みゃ"],
  ["myu", "みゅ"],
  ["myo", "みょ"],
  ["rya", "りゃ"],
  ["ryu", "りゅ"],
  ["ryo", "りょ"],
  ["shi", "し"],
  ["chi", "ち"],
  ["tsu", "つ"],
  ["fu", "ふ"],
  ["ji", "じ"],
  ["zhi", "じ"],
  ["si", "し"],
  ["ti", "ち"],
  ["tu", "つ"],
  ["hu", "ふ"],
  ["zi", "じ"],
  ["ka", "か"],
  ["ki", "き"],
  ["ku", "く"],
  ["ke", "け"],
  ["ko", "こ"],
  ["ga", "が"],
  ["gi", "ぎ"],
  ["gu", "ぐ"],
  ["ge", "げ"],
  ["go", "ご"],
  ["sa", "さ"],
  ["su", "す"],
  ["se", "せ"],
  ["so", "そ"],
  ["za", "ざ"],
  ["zu", "ず"],
  ["ze", "ぜ"],
  ["zo", "ぞ"],
  ["ta", "た"],
  ["te", "て"],
  ["to", "と"],
  ["da", "だ"],
  ["di", "ぢ"],
  ["du", "づ"],
  ["de", "で"],
  ["do", "ど"],
  ["na", "な"],
  ["ni", "に"],
  ["nu", "ぬ"],
  ["ne", "ね"],
  ["no", "の"],
  ["ha", "は"],
  ["hi", "ひ"],
  ["he", "へ"],
  ["ho", "ほ"],
  ["ba", "ば"],
  ["bi", "び"],
  ["bu", "ぶ"],
  ["be", "べ"],
  ["bo", "ぼ"],
  ["pa", "ぱ"],
  ["pi", "ぴ"],
  ["pu", "ぷ"],
  ["pe", "ぺ"],
  ["po", "ぽ"],
  ["ma", "ま"],
  ["mi", "み"],
  ["mu", "む"],
  ["me", "め"],
  ["mo", "も"],
  ["ya", "や"],
  ["yu", "ゆ"],
  ["yo", "よ"],
  ["ra", "ら"],
  ["ri", "り"],
  ["ru", "る"],
  ["re", "れ"],
  ["ro", "ろ"],
  ["wa", "わ"],
  ["wo", "を"],
  ["nn", "ん"],
  ["n", "ん"],
  ["a", "あ"],
  ["i", "い"],
  ["u", "う"],
  ["e", "え"],
  ["o", "お"],
  ["-", "ー"],
];

const COMMON_KANJI_TO_KANA: [string, string][] = [
  ["有難うございます", "ありがとうございます"],
  ["有り難うございます", "ありがとうございます"],
  ["有難う", "ありがとう"],
  ["有り難う", "ありがとう"],
  ["今日は", "こんにちは"],
  ["今晩は", "こんばんは"],
  ["お早う", "おはよう"],
  ["私", "わたし"],
  ["僕", "ぼく"],
  ["学生", "がくせい"],
  ["先生", "せんせい"],
  ["日本", "にほん"],
  ["日本語", "にほんご"],
  ["一日", "いちにち"],
  ["一人", "ひとり"],
  ["下さい", "ください"],
  ["頂", "いただ"],
  ["食", "た"],
  ["飲", "の"],
  ["行", "い"],
  ["来", "き"],
  ["見", "み"],
  ["聞", "き"],
  ["話", "はな"],
  ["買", "か"],
  ["何", "なに"],
  ["人", "ひと"],
  ["水", "みず"],
  ["火", "ひ"],
  ["木", "き"],
  ["金", "きん"],
  ["土", "つち"],
  ["日", "ひ"],
  ["月", "つき"],
  ["山", "やま"],
  ["川", "かわ"],
  ["雨", "あめ"],
  ["天", "てん"],
  ["気", "き"],
  ["母", "はは"],
  ["父", "ちち"],
  ["姉", "あね"],
  ["兄", "あに"],
  ["妹", "いもうと"],
  ["弟", "おとうと"],
  ["友", "とも"],
];

export function katakanaToHiragana(input: string): string {
  return Array.from(input)
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 0x30a1 && code <= 0x30f6) {
        return String.fromCharCode(code - 0x60);
      }
      return ch;
    })
    .join("");
}

export function romajiToHiragana(input: string): string {
  let rest = input.toLowerCase().replace(/[^a-z-]/g, "");
  let out = "";
  while (rest.length > 0) {
    if (rest[0] === rest[1] && rest[0] !== "n" && /[bcdfghjklmpqrstvwxyz]/.test(rest[0] ?? "")) {
      out += "っ";
      rest = rest.slice(1);
      continue;
    }
    const hit = ROMAJI_TO_HIRA.find(([roma]) => rest.startsWith(roma));
    if (hit) {
      out += hit[1];
      rest = rest.slice(hit[0].length);
    } else {
      rest = rest.slice(1);
    }
  }
  return out;
}

export function foldKanjiReadings(input: string): string {
  let out = input;
  for (const [kanji, kana] of COMMON_KANJI_TO_KANA) {
    out = out.split(kanji).join(kana);
  }
  return out;
}

export function normalizeJapanese(input: string): string {
  const stripped = input
    .normalize("NFKC")
    .replace(/[\s\u3000.,!?！？。、・~～'"’‘“”()（）\[\]「」『』…]/g, "")
    .replace(/ー/g, "");
  const kana = katakanaToHiragana(foldKanjiReadings(stripped));
  if (/[\u3040-\u309f]/.test(kana)) {
    return kana.replace(/[^\u3040-\u309fっ]/g, "");
  }
  return romajiToHiragana(kana);
}

export function uniqueStrings(values: Array<string | undefined | null>): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const value of values) {
    const trimmed = value?.trim();
    if (!trimmed || seen.has(trimmed)) continue;
    seen.add(trimmed);
    out.push(trimmed);
  }
  return out;
}

export function speechTargets(
  ja: string,
  reading?: string,
  romaji?: string,
  extra: string[] = [],
): string[] {
  return uniqueStrings([ja, reading, romaji, reading?.replace(/\s/g, ""), ...extra]);
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    let prev = i - 1;
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const temp = row[j] ?? 0;
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row[j] = Math.min(
        (row[j] ?? 0) + 1,
        (row[j - 1] ?? 0) + 1,
        prev + cost,
      );
      prev = temp;
    }
  }
  return row[b.length] ?? b.length;
}
