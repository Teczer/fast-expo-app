#!/usr/bin/env node

import inquirer from "inquirer";
import degit from "degit";
import fs from "fs";
import path from "path";

async function main() {
  // 1. Prompt pour le nom du projet
  const { projectName } = await inquirer.prompt<{ projectName: string }>([
    {
      type: "input",
      name: "projectName",
      message: "What do you want to name your project?",
      default: "my-app",
    },
  ]);

  // 2. Prompt pour MMKV
  const { useMMKV } = await inquirer.prompt<{ useMMKV: boolean }>([
    {
      type: "confirm",
      name: "useMMKV",
      message: "Do you want to use MMKV (ultra-fast storage)?",
      default: true,
    },
  ]);

  // 3. Cloner le boilerplate
  const emitter = degit(
    "Teczer/expo-react-native-nativewind-typescript-boilerplate",
    {
      cache: false,
      force: true,
      verbose: true,
    },
  );

  await emitter.clone(projectName);

  // 4. Supprimer le .git
  fs.rmSync(path.join(projectName, ".git"), { recursive: true, force: true });

  // 5. Si l'utilisateur ne veut pas MMKV, on retire la dépendance et le fichier
  if (!useMMKV) {
    const pkgPath = path.join(projectName, "package.json");
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
      // Supprime MMKV des dépendances
      if (pkg.dependencies && pkg.dependencies["react-native-mmkv"]) {
        delete pkg.dependencies["react-native-mmkv"];
      }
      if (pkg.devDependencies && pkg.devDependencies["react-native-mmkv"]) {
        delete pkg.devDependencies["react-native-mmkv"];
      }
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    }

    // Supprime le fichier lib/mmkv.ts s'il existe
    const mmkvFile = path.join(projectName, "lib", "mmkv.ts");
    if (fs.existsSync(mmkvFile)) {
      fs.rmSync(mmkvFile);
    }
  }

  console.log(`\n✅ Project "${projectName}" is ready!`);
  console.log(`\nNext steps:`);
  console.log(`cd ${projectName}`);
  console.log(`bun install`);
  console.log(`npx expo prebuild`);
  console.log(`bun ios | bun android`);
}

main();
