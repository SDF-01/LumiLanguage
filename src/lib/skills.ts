import type { Exercise, ExerciseKind, SkillFocus } from "@/lib/types";

export function skillForExercise(exercise: Exercise): SkillFocus {
  if (exercise.skill) return exercise.skill;
  return skillFromKind(exercise.kind);
}

export function skillFromKind(kind: ExerciseKind): SkillFocus {
  switch (kind) {
    case "listen-choice":
      return "listen";
    case "speak-prompt":
      return "speak";
    case "write-choice":
    case "stroke-write":
      return "write";
    case "multiple-choice":
    case "match":
    case "sentence-build":
      return "read";
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}

export function skillLabel(skill: SkillFocus): string {
  switch (skill) {
    case "read":
      return "Read";
    case "write":
      return "Write";
    case "speak":
      return "Speak";
    case "listen":
      return "Listen";
    default: {
      const _exhaustive: never = skill;
      return _exhaustive;
    }
  }
}
