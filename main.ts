// The Agent's Uh-Oh — make.fun entry (program/v1).
// Writes one word to /output/entry.txt: the word an agent says when it
// has no idea what to do.
// The word: "blanking" — the honest blurt of a mind gone blank, machine
// and human at once. One glance, one laugh, nothing attached.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "blanking";

// Gate self-check (mirrors the sealed scorer): 1-99 chars, not only
// whitespace. Fails loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 99 || !ENTRY.trim()) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), ENTRY, "utf8");
