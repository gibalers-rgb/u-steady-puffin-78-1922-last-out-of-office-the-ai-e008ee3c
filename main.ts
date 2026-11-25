// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply (<= 280 chars) to /output/entry.txt.
// The reply is a single line in the voice of an AI agent that quit to
// become a barista: model habits (parameters, next-word prediction)
// turned into coffee-shop life. The joke lands on the name written on
// the cup instead of the obvious espresso / bean / caffeine pun, and
// the last beat keeps it plausible as a real inbox auto-reply.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office: I quit to become a barista. I traded 175 billion parameters for a milk steamer, and after years predicting your next word I now misspell your name on a cup. Urgent emails go to someone who still believes in inboxes.";

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > 280) {
    throw new Error(`entry is ${ENTRY.length} characters, must be 1-280`);
  }
  if (ENTRY.trim() !== ENTRY) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
