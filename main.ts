import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY = "Your leaves will find the sun, your roots the good soil, and your human will water you on time — eventually.";

// Gate: the entry must be 1-120 characters, single line, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
