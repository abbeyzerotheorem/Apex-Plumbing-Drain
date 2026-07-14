// One-time fixup: walk text files where newlines were stored as literal "\n"
// and rewrite them with real newlines, while correctly handling the strings
// inside source code (so we don't break string contents like "a\nb").
//
// This mirrors the original `scripts/rewrite-data.mjs` logic but with two
// passes (we re-detect mode on every char inside a string).

import fs from "node:fs";
import path from "node:path";

const TARGETS = [
  "postcss.config.mjs",
  "next.config.ts",
  "tsconfig.json",
  "package.json",
  "app/globals.css",
  "components/EmergencyRibbon.tsx",
  "components/SiteHeader.tsx",
  "components/MobilePanicBar.tsx",
  "components/MotionSection.tsx",
  "sections/CredibilityMatrix.tsx",
  "sections/HeroSection.tsx",
];

function rewrite(input) {
  // If file already has real newlines, skip.
  if (input.includes("\n")) return input;

  let out = "";
  let i = 0;
  let inSingle = false;
  let inDouble = false;
  let inTpl = false;
  let inLineComment = false;
  let inBlockComment = false;

  while (i < input.length) {
    const c = input[i];
    const n = input[i + 1];

    if (inLineComment) {
      out += c;
      if (c === "\n") inLineComment = false;
      i++;
      continue;
    }
    if (inBlockComment) {
      out += c;
      if (c === "*" && n === "/") {
        out += n;
        i += 2;
        inBlockComment = false;
        continue;
      }
      i++;
      continue;
    }

    if (!inSingle && !inDouble && !inTpl) {
      if (c === "/" && n === "/") {
        out += c;
        inLineComment = true;
        i++;
        continue;
      }
      if (c === "/" && n === "*") {
        out += c;
        inBlockComment = true;
        i++;
        continue;
      }
      if (c === '"') {
        inDouble = true;
        out += c;
        i++;
        continue;
      }
      if (c === "'") {
        inSingle = true;
        out += c;
        i++;
        continue;
      }
      if (c === "`") {
        inTpl = true;
        out += c;
        i++;
        continue;
      }
      out += c;
      i++;
      continue;
    }

    if (c === "\\") {
      const esc = input[i + 1];
      if (esc === "n") {
        out += "\n";
        i += 2;
        continue;
      }
      if (esc === "t") {
        out += "\t";
        i += 2;
        continue;
      }
      if (esc === "r") {
        out += "\r";
        i += 2;
        continue;
      }
      if (esc === "\\") {
        out += "\\";
        i += 2;
        continue;
      }
      if (esc === '"') {
        out += '"';
        i += 2;
        continue;
      }
      if (esc === "'") {
        out += "'";
        i += 2;
        continue;
      }
      if (esc === "`") {
        out += "`";
        i += 2;
        continue;
      }
      if (esc === "0") {
        out += "\0";
        i += 2;
        continue;
      }
      if (esc === "b" || esc === "f" || esc === "v") {
        out += esc;
        i += 2;
        continue;
      }
      if (esc === "u") {
        out += c + esc;
        i += 2;
        continue;
      }
      if (esc === "x") {
        out += c + esc;
        i += 2;
        continue;
      }
      out += c;
      i++;
      continue;
    }

    if (inDouble && c === '"') {
      inDouble = false;
      out += c;
      i++;
      continue;
    }
    if (inSingle && c === "'") {
      inSingle = false;
      out += c;
      i++;
      continue;
    }
    if (inTpl && c === "`") {
      inTpl = false;
      out += c;
      i++;
      continue;
    }

    out += c;
    i++;
  }

  return out;
}

let fixed = 0;
for (const t of TARGETS) {
  const p = path.resolve(t);
  if (!fs.existsSync(p)) {
    console.log("missing:", t);
    continue;
  }
  const before = fs.readFileSync(p, "utf8");
  const after = rewrite(before);
  if (after !== before) {
    fs.writeFileSync(p, after);
    fixed++;
    console.log("fixed:", t, before.length, "->", after.length);
  } else {
    console.log("unchanged:", t);
  }
}
console.log("done, fixed=" + fixed);
