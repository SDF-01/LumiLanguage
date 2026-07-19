import type { Exercise, LearningUnit, TeachCard } from "@/lib/types";

export type VocabTeachWord = {
  word: string;
  /** Simple stress / spelling help for Japanese learners */
  reading: string;
  meaningEn: string;
  meaningJa: string;
  tipEn?: string;
  tipJa?: string;
  /** Wrong English glosses for meaning MC */
  wrongMeanings?: [string, string, string];
  /** Lookalike words for listen-choice */
  listenDistractors?: [string, string, string];
};

export function teachCardsFromVocab(words: VocabTeachWord[]): TeachCard[] {
  return words.map((w) => ({
    glyph: w.word,
    reading: w.reading,
    tipEn:
      w.tipEn ??
      `${w.word} (${w.reading}) means ${w.meaningEn}. Say it, then remember the Japanese: ${w.meaningJa}.`,
    tipJa:
      w.tipJa ??
      `${w.word}（${w.reading}）＝${w.meaningJa}。Listen で音を確認してから次へ。`,
    ttsText: w.word,
    ttsLang: "en-US",
  }));
}

/** Attach Learn-before-quiz teaching to an existing vocab unit. */
export function withVocabTeach(
  unit: LearningUnit,
  words: VocabTeachWord[],
  options?: { tutorialTitleEn?: string; tutorialTitleJa?: string },
): LearningUnit {
  return {
    ...unit,
    subtitle: `Learn each word with audio first, then practice: ${unit.subtitle}`,
    tutorial: {
      ...unit.tutorial,
      title: options?.tutorialTitleEn ?? `Learn words before the quiz`,
      titleJa: options?.tutorialTitleJa ?? `クイズの前に語を覚える`,
      bodyEn: `First you will learn each workplace word one by one with spelling help and Listen. Only after that do the short quiz (read → write → speak → listen). Same teaching order as Japanese Quest. Words today: ${words
        .map((w) => w.word)
        .join(", ")}.`,
      bodyJa: `最初に1語ずつスペルと Listen で教えます。そのあと短いクイズ（読む→書く→話す→聞く）。日本語クエストと同じ順序です。今日の語：${words
        .map((w) => w.word)
        .join("、")}。`,
      tips: [
        "Do not skip Learn",
        "Say the English word aloud",
        "Connect each word to a workplace scene",
        ...(unit.tutorial.tips ?? []).slice(0, 1),
      ],
    },
    teach: teachCardsFromVocab(words),
    exercises: unit.exercises as Exercise[],
  };
}

export type ThematicVocabSpec = {
  id: string;
  title: string;
  titleJa: string;
  subtitle: string;
  examPart?: string;
  xpReward?: number;
  tutorialTitleEn: string;
  tutorialTitleJa: string;
  bodyEn: string;
  bodyJa: string;
  words: VocabTeachWord[];
};

function meaningChoices(word: VocabTeachWord): Exercise["choices"] {
  const wrong =
    word.wrongMeanings ??
    ([
      "A type of office furniture",
      "A holiday travel package",
      "A company parking rule",
    ] as [string, string, string]);
  return [
    { id: "a", label: `A) ${wrong[0]}` },
    { id: "b", label: `B) ${word.meaningEn}` },
    { id: "c", label: `C) ${wrong[1]}` },
    { id: "d", label: `D) ${wrong[2]}` },
  ];
}

/** Build a full Learn-then-practice VOCAB unit from a word list. */
export function createThematicVocabUnit(spec: ThematicVocabSpec): LearningUnit {
  const words = spec.words;
  const others = (i: number) => words.filter((_, j) => j !== i).map((w) => w.word);

  const exercises: Exercise[] = [];

  words.slice(0, 4).forEach((w, i) => {
    exercises.push({
      id: `${spec.id}-r${i + 1}`,
      kind: "multiple-choice",
      skill: "read",
      prompt: `What does '${w.word}' mean?`,
      promptJa: `${w.word} の意味は？`,
      choices: meaningChoices(w),
      correctChoiceId: "b",
      explanationEn: `${w.word} means ${w.meaningEn}.`,
      explanationJa: `${w.word} は「${w.meaningJa}」です。`,
    });
  });

  words.slice(0, 2).forEach((w, i) => {
    const distractors = others(words.indexOf(w)).slice(0, 3);
    while (distractors.length < 3) distractors.push("schedule");
    exercises.push({
      id: `${spec.id}-w${i + 1}`,
      kind: "write-choice",
      skill: "write",
      prompt: `Which word means '${w.meaningJa}'?`,
      promptJa: `「${w.meaningJa}」に当たる語は？`,
      choices: [
        { id: "a", label: `A) ${distractors[0]}` },
        { id: "b", label: `B) ${w.word}` },
        { id: "c", label: `C) ${distractors[1]}` },
        { id: "d", label: `D) ${distractors[2]}` },
      ],
      correctChoiceId: "b",
      explanationEn: `${w.word} = ${w.meaningEn} / ${w.meaningJa}.`,
      explanationJa: `${w.word} は${w.meaningJa}です。`,
    });
  });

  const speakWord = words[Math.min(2, words.length - 1)];
  exercises.push({
    id: `${spec.id}-s1`,
    kind: "speak-prompt",
    skill: "speak",
    prompt: `Say '${speakWord.word}' clearly after LUMI.`,
    promptJa: `${speakWord.word} をはっきり言ってみましょう。`,
    ttsText: speakWord.word,
    ttsLang: "en-US",
    explanationEn: `${speakWord.word} (${speakWord.reading}) means ${speakWord.meaningEn}.`,
    explanationJa: `${speakWord.word}＝${speakWord.meaningJa}。`,
  });

  const listenWord = words[Math.min(3, words.length - 1)];
  const listenWrong =
    listenWord.listenDistractors ??
    (others(words.indexOf(listenWord)).slice(0, 3) as string[]);
  while (listenWrong.length < 3) listenWrong.push("memo");
  exercises.push({
    id: `${spec.id}-l1`,
    kind: "listen-choice",
    skill: "listen",
    prompt: "Listen. Which word do you hear?",
    promptJa: "聞いて、聞こえた語を選ぶ。",
    ttsText: listenWord.word,
    ttsLang: "en-US",
    choices: [
      { id: "a", label: `A) ${listenWrong[0]}` },
      { id: "b", label: `B) ${listenWord.word}` },
      { id: "c", label: `C) ${listenWrong[1]}` },
      { id: "d", label: `D) ${listenWrong[2]}` },
    ],
    correctChoiceId: "b",
    explanationEn: `You heard ${listenWord.word}: ${listenWord.meaningEn}.`,
    explanationJa: `${listenWord.word}（${listenWord.meaningJa}）が聞こえました。`,
  });

  // Two collocation / context items for depth
  words.slice(4, 6).forEach((w, i) => {
    exercises.push({
      id: `${spec.id}-c${i + 1}`,
      kind: "multiple-choice",
      skill: "read",
      prompt: `'${w.word}' is closest to:`,
      promptJa: `${w.word} に最も近い意味は？`,
      choices: meaningChoices(w),
      correctChoiceId: "b",
      explanationEn: `${w.word} ≈ ${w.meaningEn}.`,
      explanationJa: `${w.word} ≈ ${w.meaningJa}。`,
    });
  });

  const base: LearningUnit = {
    id: spec.id,
    pathId: "toeic",
    title: spec.title,
    titleJa: spec.titleJa,
    subtitle: spec.subtitle,
    examPart: spec.examPart ?? "VOCAB",
    xpReward: spec.xpReward ?? 100,
    tutorial: {
      title: spec.tutorialTitleEn,
      titleJa: spec.tutorialTitleJa,
      bodyEn: spec.bodyEn,
      bodyJa: spec.bodyJa,
      tips: [
        "Learn with Listen first",
        "Say each English word aloud",
        "Link the word to a workplace scene",
      ],
    },
    exercises,
  };

  return withVocabTeach(base, words);
}
