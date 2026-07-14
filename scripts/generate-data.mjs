import fs from "node:fs";
const data = JSON.parse(fs.readFileSync("/tmp/plumbing-data.json", "utf8"));
const lines = [];
lines.push('import type { PlumbingConfig } from "@/types/plumbing";');
lines.push("");
lines.push("/**");
lines.push(" * SINGLE SOURCE OF TRUTH for the entire site.");
lines.push(" * The client (or a developer) edits ONLY this file to:");
lines.push(" *  - Swap phone numbers, license keys, insurance values");
lines.push(" *  - Add or remove coverage areas and zip codes");
lines.push(" *  - Adjust baseline service pricing and response time targets");
lines.push(" *");
lines.push(" * No contact number, license number, or baseline price lives");
lines.push(" * anywhere in /app, /components, or /sections.");
lines.push(" */");
lines.push("export const plumbingConfig: PlumbingConfig = " + stringify(data, 0) + ";");
lines.push("");
fs.writeFileSync("data/plumbing.ts", lines.join("\n"));
console.log("wrote data/plumbing.ts, " + lines.length + " lines, " + fs.statSync("data/plumbing.ts").size + " bytes");

function isSafeIdent(k) { return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k); }
function stringify(value, depth) {
  const ind = "  ".repeat(depth);
  if (value === null) return "null";
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "number") return String(value);
  if (typeof value === "string") return JSON.stringify(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value.map((v) => ind + "  " + stringify(v, depth + 1));
    return "[\n" + items.join(",\n") + "\n" + ind + "]";
  }
  if (typeof value === "object") {
    const keys = Object.keys(value);
    if (keys.length === 0) return "{}";
    const items = keys.map((k) => {
      const key = isSafeIdent(k) ? k : JSON.stringify(k);
      return ind + "  " + key + ": " + stringify(value[k], depth + 1);
    });
    return "{\n" + items.join(",\n") + "\n" + ind + "}";
  }
  return "undefined";
}
