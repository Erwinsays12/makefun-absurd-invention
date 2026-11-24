import { mkdirSync, writeFileSync } from "node:fs";

// One-Sentence Absurd Invention Pitch.
// The pitch is a single fixed, deterministic sentence: earbuds that untangle
// themselves with a smug little bow the moment they leave your pocket, so
// you never start the day losing a fight with wire. No randomness, no clock
// and no network input, so both grader runs produce the same text.
const PITCH =
  "Earbuds that untangle themselves with a smug little bow the moment you pull them from your pocket, so you never start the day losing a fight with wire.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate allows 1 to 220 characters; fail loudly if the pitch ever drifts out.
if (PITCH.length < 1 || PITCH.length > 220) {
  throw new Error(
    `pitch is ${PITCH.length} characters, outside the 1-220 gate`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to ${OUTPUT_PATH}`);
