import { mkdirSync, writeFileSync } from "node:fs";

// One joke about Monday mornings, written for the
// "Monday Morning Punchlines" bounty. Monday arrives like an
// uninvited guest who makes himself at home before you wake up.
const JOKE =
  "Monday doesn't knock. It walks in, sits on my calendar, and starts booking meetings before my eyes have finished loading.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
