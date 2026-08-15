export type KanjiSchoolEntry = {
  kanji: string;
  meaningEn: string;
  meaningJa: string;
  kun: string;
  on: string;
  hintEn: string;
  hintJa: string;
  tts: string;
};

export const kanjiSchool: KanjiSchoolEntry[] = [
  { kanji: "一", meaningEn: "one", meaningJa: "いち", kun: "ひと", on: "イチ", hintEn: "One stroke.", hintJa: "横線1本。", tts: "いち" },
  { kanji: "二", meaningEn: "two", meaningJa: "に", kun: "ふた", on: "ニ", hintEn: "Two strokes.", hintJa: "横線2本。", tts: "に" },
  { kanji: "三", meaningEn: "three", meaningJa: "さん", kun: "みっ", on: "サン", hintEn: "Three strokes.", hintJa: "横線3本。", tts: "さん" },
  { kanji: "四", meaningEn: "four", meaningJa: "よん", kun: "よん / よ", on: "シ", hintEn: "Box with legs.", hintJa: "四角に足。", tts: "よん" },
  { kanji: "五", meaningEn: "five", meaningJa: "ご", kun: "いつ", on: "ゴ", hintEn: "Five.", hintJa: "五。", tts: "ご" },
  { kanji: "六", meaningEn: "six", meaningJa: "ろく", kun: "むっ", on: "ロク", hintEn: "A lid and legs.", hintJa: "ふた＋足。", tts: "ろく" },
  { kanji: "七", meaningEn: "seven", meaningJa: "なな", kun: "なな", on: "シチ", hintEn: "A cut seven.", hintJa: "なな。", tts: "なな" },
  { kanji: "八", meaningEn: "eight", meaningJa: "はち", kun: "やっ", on: "ハチ", hintEn: "Open eight.", hintJa: "開いた八。", tts: "はち" },
  { kanji: "九", meaningEn: "nine", meaningJa: "きゅう", kun: "ここの", on: "キュウ", hintEn: "A hooked nine.", hintJa: "きゅう。", tts: "きゅう" },
  { kanji: "十", meaningEn: "ten", meaningJa: "じゅう", kun: "とお", on: "ジュウ", hintEn: "A cross.", hintJa: "十字。", tts: "じゅう" },
  { kanji: "百", meaningEn: "hundred", meaningJa: "ひゃく", kun: "もも", on: "ヒャク", hintEn: "White + one.", hintJa: "白＋一。", tts: "ひゃく" },
  { kanji: "千", meaningEn: "thousand", meaningJa: "せん", kun: "ち", on: "セン", hintEn: "Person + ten.", hintJa: "千。", tts: "せん" },
  { kanji: "人", meaningEn: "person", meaningJa: "ひと", kun: "ひと", on: "ジン", hintEn: "Walking legs.", hintJa: "歩く人。", tts: "ひと" },
  { kanji: "女", meaningEn: "woman", meaningJa: "おんな", kun: "おんな", on: "ジョ", hintEn: "Kneeling figure.", hintJa: "すわる人。", tts: "おんな" },
  { kanji: "男", meaningEn: "man", meaningJa: "おとこ", kun: "おとこ", on: "ダン", hintEn: "Field + power.", hintJa: "田＋力。", tts: "おとこ" },
  { kanji: "子", meaningEn: "child", meaningJa: "こ", kun: "こ", on: "シ", hintEn: "A child.", hintJa: "こども。", tts: "こ" },
  { kanji: "学", meaningEn: "study", meaningJa: "がく", kun: "まな", on: "ガク", hintEn: "Child under a roof.", hintJa: "屋根の下の子。", tts: "がく" },
  { kanji: "先", meaningEn: "ahead / previous", meaningJa: "さき", kun: "さき", on: "セン", hintEn: "The tip, the teacher half of 先生.", hintJa: "さき。先生の先。", tts: "せん" },
  { kanji: "生", meaningEn: "life / born", meaningJa: "せい", kun: "い / う", on: "セイ", hintEn: "Grow / live. 先生, 学生.", hintJa: "生きる。先生・学生。", tts: "せい" },
  { kanji: "友", meaningEn: "friend", meaningJa: "とも", kun: "とも", on: "ユウ", hintEn: "Two hands together.", hintJa: "友だち。", tts: "とも" },
  { kanji: "日", meaningEn: "sun / day", meaningJa: "ひ / にち", kun: "ひ", on: "ニチ", hintEn: "A window of light.", hintJa: "太陽・日。", tts: "ひ" },
  { kanji: "月", meaningEn: "moon / month", meaningJa: "つき", kun: "つき", on: "ゲツ", hintEn: "A crescent.", hintJa: "月。", tts: "つき" },
  { kanji: "火", meaningEn: "fire", meaningJa: "ひ", kun: "ひ", on: "カ", hintEn: "Flames.", hintJa: "火。", tts: "ひ" },
  { kanji: "水", meaningEn: "water", meaningJa: "みず", kun: "みず", on: "スイ", hintEn: "Splashing water.", hintJa: "水。", tts: "みず" },
  { kanji: "木", meaningEn: "tree", meaningJa: "き", kun: "き", on: "モク", hintEn: "A tree with roots.", hintJa: "木。", tts: "き" },
  { kanji: "金", meaningEn: "gold / money", meaningJa: "かね", kun: "かね", on: "キン", hintEn: "Metal under a roof.", hintJa: "金・お金。", tts: "きん" },
  { kanji: "土", meaningEn: "earth / soil", meaningJa: "つち", kun: "つち", on: "ド", hintEn: "A plant in soil.", hintJa: "土。", tts: "つち" },
  { kanji: "山", meaningEn: "mountain", meaningJa: "やま", kun: "やま", on: "サン", hintEn: "Three peaks.", hintJa: "山。", tts: "やま" },
  { kanji: "川", meaningEn: "river", meaningJa: "かわ", kun: "かわ", on: "セン", hintEn: "Flowing lines.", hintJa: "川。", tts: "かわ" },
  { kanji: "田", meaningEn: "rice field", meaningJa: "た", kun: "た", on: "デン", hintEn: "A divided field.", hintJa: "田んぼ。", tts: "た" },
  { kanji: "上", meaningEn: "up / above", meaningJa: "うえ", kun: "うえ / あ", on: "ジョウ", hintEn: "Above the line.", hintJa: "上。", tts: "うえ" },
  { kanji: "下", meaningEn: "down / below", meaningJa: "した", kun: "した / さ", on: "カ", hintEn: "Below the line.", hintJa: "下。", tts: "した" },
  { kanji: "中", meaningEn: "middle / inside", meaningJa: "なか", kun: "なか", on: "チュウ", hintEn: "A line through a box.", hintJa: "中。", tts: "なか" },
  { kanji: "大", meaningEn: "big", meaningJa: "おお", kun: "おお", on: "ダイ", hintEn: "A person with arms out.", hintJa: "大きい。", tts: "だい" },
  { kanji: "小", meaningEn: "small", meaningJa: "ちい", kun: "ちい / こ", on: "ショウ", hintEn: "A split little mark.", hintJa: "小さい。", tts: "しょう" },
  { kanji: "本", meaningEn: "book / origin", meaningJa: "ほん", kun: "もと", on: "ホン", hintEn: "Tree with a root mark. 日本.", hintJa: "本・もと。日本。", tts: "ほん" },
  { kanji: "円", meaningEn: "yen / circle", meaningJa: "えん", kun: "まる", on: "エン", hintEn: "Round yen.", hintJa: "円。", tts: "えん" },
  { kanji: "食", meaningEn: "eat / food", meaningJa: "た", kun: "た", on: "ショク", hintEn: "A lid over food.", hintJa: "食べる。", tts: "たべる" },
  { kanji: "飲", meaningEn: "drink", meaningJa: "の", kun: "の", on: "イン", hintEn: "Food + lack. 飲む.", hintJa: "飲む。", tts: "のむ" },
  { kanji: "見", meaningEn: "see", meaningJa: "み", kun: "み", on: "ケン", hintEn: "Eye on legs.", hintJa: "見る。", tts: "みる" },
  { kanji: "行", meaningEn: "go", meaningJa: "い / ゆ", kun: "い", on: "コウ", hintEn: "A crossroads.", hintJa: "行く。", tts: "いく" },
  { kanji: "来", meaningEn: "come", meaningJa: "く", kun: "く", on: "ライ", hintEn: "Wheat coming toward you.", hintJa: "来る。", tts: "くる" },
  { kanji: "出", meaningEn: "exit / leave", meaningJa: "で", kun: "で / だ", on: "シュツ", hintEn: "Two mountains stacked.", hintJa: "出る。", tts: "でる" },
  { kanji: "入", meaningEn: "enter", meaningJa: "はい", kun: "はい / い", on: "ニュウ", hintEn: "An opening. Not 人.", hintJa: "入る。人ではない。", tts: "はいる" },
  { kanji: "休", meaningEn: "rest", meaningJa: "やす", kun: "やす", on: "キュウ", hintEn: "Person + tree.", hintJa: "休む。", tts: "やすむ" },
  { kanji: "時", meaningEn: "time / hour", meaningJa: "とき", kun: "とき", on: "ジ", hintEn: "Sun + temple. 3時.", hintJa: "時。", tts: "じ" },
  { kanji: "分", meaningEn: "minute / part", meaningJa: "ふん / わ", kun: "わ", on: "フン", hintEn: "A cut portion.", hintJa: "分。", tts: "ふん" },
  { kanji: "年", meaningEn: "year", meaningJa: "とし", kun: "とし", on: "ネン", hintEn: "A harvest year.", hintJa: "年。", tts: "ねん" },
  { kanji: "今", meaningEn: "now", meaningJa: "いま", kun: "いま", on: "コン", hintEn: "This moment. 今日.", hintJa: "今。", tts: "いま" },
  { kanji: "何", meaningEn: "what", meaningJa: "なに", kun: "なに / なん", on: "カ", hintEn: "The question word.", hintJa: "何。", tts: "なに" },
  { kanji: "名", meaningEn: "name", meaningJa: "な", kun: "な", on: "メイ", hintEn: "Evening + mouth. 名前.", hintJa: "名前。", tts: "な" },
];

export function kanjiById(kanji: string): KanjiSchoolEntry | undefined {
  return kanjiSchool.find((entry) => entry.kanji === kanji);
}

export function kanjiIds(): string[] {
  return [...new Set(kanjiSchool.map((entry) => entry.kanji))];
}
