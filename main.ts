// DealSleuth entry program for the make.fun Black Friday deal finder bounty.
// Copies app/ and screenshots/ into the output directory and writes
// dossier.json with buildDossier from vendor/makefun-frontend.ts.
// Node 22, standard library only. Run twice: both runs write identical bytes.

import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const dossierCaps = {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 256 * 1024 },
  app_max_files: 993,
  app_max_bytes: 16 * 1024 * 1024,
  app_path_max_bytes: 1000
};

function handIn() {
  // Start from a clean output directory so a stale file can never leak in.
  // Never remove the directory itself: the grader runs as uid 65534 on a
  // read-only filesystem where /output's parent (/) is not writable, so
  // deleting the directory throws EACCES. Clear only its contents.
  mkdirSync(outputDir, { recursive: true });
  for (const child of readdirSync(outputDir)) {
    rmSync(join(outputDir, child), { recursive: true, force: true });
  }

  for (const sub of ["app", "screenshots"]) {
    const source = join(repoRoot, sub);
    if (!existsSync(source)) throw new Error(`hand-in: missing ${sub}/ in ${repoRoot}`);
    cpSync(source, join(outputDir, sub), { recursive: true });
  }

  const dossier = buildDossier(outputDir, dossierCaps);
  writeFileSync(join(outputDir, "dossier.json"), Buffer.from(dossier));

  // One line of proof that the hand-in is complete; the bytes stay identical.
  console.log(`hand-in complete: ${outputDir} (dossier.json ${dossier.length} bytes)`);
}

handIn();
