import { speechTargets } from "@/lib/japanese-normalize";
import type { DialogueScene } from "@/lib/types";

export const japaneseDialogues: DialogueScene[] = [
  {
    id: "first-meet",
    title: "First meeting",
    titleJa: "はじめてのあいさつ",
    settingEn: "You meet Lumi at a language cafe. Your lines are the ones you speak.",
    settingJa: "言語カフェでルミに会います。あなたの行を声に出します。",
    lines: [
      {
        id: "fm-1",
        speaker: "lumi",
        ja: "こんにちは。ルミです。",
        reading: "こんにちは。るみです。",
        en: "Hello. I'm Lumi.",
      },
      {
        id: "fm-2",
        speaker: "you",
        ja: "はじめまして。リアムです。",
        reading: "はじめまして。りあむです。",
        en: "Nice to meet you. I'm Liam.",
        expectedSpeech: speechTargets(
          "はじめましてリアムです",
          "はじめまして りあむです",
          "hajimemashite riamu desu",
          ["はじめまして"],
        ),
      },
      {
        id: "fm-3",
        speaker: "lumi",
        ja: "にほんごをべんきょうしますか。",
        reading: "にほんごをべんきょうしますか。",
        en: "Are you studying Japanese?",
      },
      {
        id: "fm-4",
        speaker: "you",
        ja: "はい、べんきょうします。",
        reading: "はい、べんきょうします。",
        en: "Yes, I study it.",
        expectedSpeech: speechTargets(
          "はいべんきょうします",
          "はい べんきょうします",
          "hai benkyou shimasu",
          ["はい"],
        ),
      },
      {
        id: "fm-5",
        speaker: "you",
        ja: "よろしくおねがいします。",
        reading: "よろしくおねがいします。",
        en: "I look forward to it.",
        expectedSpeech: speechTargets(
          "よろしくおねがいします",
          "よろしくおねがいします",
          "yoroshiku onegai shimasu",
        ),
      },
    ],
  },
  {
    id: "cafe-order",
    title: "Cafe order",
    titleJa: "カフェで注文",
    settingEn: "A small cafe. You order a drink and thank the staff.",
    settingJa: "小さなカフェ。飲み物を頼んでお礼を言います。",
    lines: [
      {
        id: "cf-1",
        speaker: "friend",
        ja: "いらっしゃいませ。",
        reading: "いらっしゃいませ。",
        en: "Welcome.",
      },
      {
        id: "cf-2",
        speaker: "you",
        ja: "コーヒーをください。",
        reading: "コーヒーをください。",
        en: "Coffee, please.",
        expectedSpeech: speechTargets(
          "コーヒーをください",
          "こーひーをください",
          "koohii o kudasai",
          ["コーヒー"],
        ),
      },
      {
        id: "cf-3",
        speaker: "friend",
        ja: "はい、どうぞ。",
        reading: "はい、どうぞ。",
        en: "Here you go.",
      },
      {
        id: "cf-4",
        speaker: "you",
        ja: "ありがとうございます。",
        reading: "ありがとうございます。",
        en: "Thank you.",
        expectedSpeech: speechTargets(
          "ありがとうございます",
          "ありがとうございます",
          "arigatou gozaimasu",
          ["ありがとう"],
        ),
      },
    ],
  },
  {
    id: "ask-time",
    title: "Asking the time",
    titleJa: "じかんをきく",
    settingEn: "On the platform. You ask Lumi what time it is.",
    settingJa: "ホームでルミに今何時かたずねます。",
    lines: [
      {
        id: "tm-1",
        speaker: "you",
        ja: "すみません。",
        reading: "すみません。",
        en: "Excuse me.",
        expectedSpeech: speechTargets("すみません", "すみません", "sumimasen"),
      },
      {
        id: "tm-2",
        speaker: "you",
        ja: "いまなんじですか。",
        reading: "いまなんじですか。",
        en: "What time is it now?",
        expectedSpeech: speechTargets(
          "いまなんじですか",
          "いまなんじですか",
          "ima nanji desu ka",
        ),
      },
      {
        id: "tm-3",
        speaker: "lumi",
        ja: "さんじです。",
        reading: "さんじです。",
        en: "It is 3 o'clock.",
      },
      {
        id: "tm-4",
        speaker: "you",
        ja: "ありがとうございます。",
        reading: "ありがとうございます。",
        en: "Thank you.",
        expectedSpeech: speechTargets(
          "ありがとうございます",
          "ありがとうございます",
          "arigatou gozaimasu",
        ),
      },
    ],
  },
];

export function getDialogue(id: string): DialogueScene | undefined {
  return japaneseDialogues.find((scene) => scene.id === id);
}
