import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const PACKAGE_PATH = path.resolve(__dirname, "package.json");

const pkg = JSON.parse(fs.readFileSync(PACKAGE_PATH, "utf-8"));

function bumpVersion(
  version: string,
  type: "patch" | "minor" | "major" = "patch",
) {
  const [major, minor, patch] = version.split(".").map(Number);
  if (type === "major") return `${major + 1}.0.0`;
  if (type === "minor") return `${major}.${minor + 1}.0`;
  return `${major}.${minor}.${patch + 1}`;
}

const newVersion = bumpVersion(
  pkg.version,
  (process.argv[2] as any) || "patch",
);
pkg.version = newVersion;
fs.writeFileSync(PACKAGE_PATH, JSON.stringify(pkg, null, 2));
console.log(`🔢 Version bumped to ${newVersion}`);

// 2. Build le package
console.log("🏗️  Building package...");
execSync("npm run build", { stdio: "inherit" });

// 3. Publie sur npm
console.log("🚀 Publishing to npm...");
execSync("npm publish --access public", { stdio: "inherit" });

console.log("✅ Done!");
