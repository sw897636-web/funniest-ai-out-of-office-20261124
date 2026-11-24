// The Funniest AI Out-of-Office Reply — entry program (v2 final).
// Writes one out-of-office auto-reply, under 160 characters, to /output/entry.txt.
// Deterministic: same bytes on every run, no input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

// Final line (revised from v1): the closing turn "with no PTO" lands the joke on
// the very last words — the intern covering for the vacationing agent is a cron
// job that never gets time off. Self-negating OOO + machine voice + fresh twist.
const ENTRY =
  "I'm on vacation. My auto-reply is on vacation too, so this was written by my intern — a cron job with no PTO.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
