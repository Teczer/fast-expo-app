# Changelog

## [5.0.0] - 2026-11-26

### ⚡ Expo SDK 58

Generated apps now target **Expo SDK 58** (React Native 0.88.1, React 19.3.0, TypeScript 6.0).
Versions follow the `bundledNativeModules.json` of `expo@58.0.26`, i.e. what `npx expo install`
would resolve. New projects require **Node.js 22.13+** (24.3+ / 26+ also supported).

### 🎨 Updated styling options

| Option | Version |
| --- | --- |
| NativeWind | 4.2.7 |
| Unistyles | 3.9.0 |
| Uniwind | 1.14.0 |

### 📦 Stack bump

- expo **58.0.26**, expo-router **58.0.32**, expo-constants **58.0.16**, expo-font **58.0.12**
- expo-dev-client **58.0.21**, expo-haptics **58.0.8**, expo-linking **58.0.17**
- expo-splash-screen **58.0.14**, expo-status-bar **58.0.5**, expo-system-ui **58.0.7**, expo-web-browser **58.1.0**
- MMKV **4.3.2** + Nitro Modules **0.37.2**
- TanStack Query **5.108.4** (+ persist-client, + query-sync-storage-persister)
- Zustand **5.1.0**
- Reanimated **4.7.1** + Worklets **0.13.0** + Gesture Handler **3.3.0**
- Keyboard Controller **1.22.7**, edge-to-edge **1.8.2**
- jest-expo **58.0.15** (Jest 30), eslint-config-expo **58.0.4**, @types/react **19.3**

### 🔧 Breaking changes in generated apps

- **Expo Router theming imports**: `DarkTheme`, `DefaultTheme`, `ThemeProvider` and `useTheme`
  are now imported from `expo-router`; `expo-router/react-navigation` only re-exports them as deprecated
- **Tabs**: tab layouts import `Tabs` from `expo-router/js-tabs` (the root export is deprecated)
- **React Native Strict TypeScript API is the default**: deep imports from `react-native/Libraries/*`
  no longer type-check, component refs use instance types (`ViewInstance`, `TextInputInstance`).
  `expo/tsconfig.base` now ships `customConditions: ["react-native"]`
- **Unistyles 3.9 removes the Babel plugin**: the generated `metro.config.js` uses
  `withUnistylesConfig` from `react-native-unistyles/metro` and `babel.config.js` only keeps
  `react-native-worklets/plugin`
- **`expo-router/testing-library` requires `@testing-library/react-native` 14** — added to the
  template devDependencies (removed when Jest is not selected)
- **Web**: `output` defaults to `"server"` in SDK 58; the template keeps an explicit `"static"`
  output and `app/+html.tsx` does not call navigation hooks
- **Android**: R8 is enabled by default for release builds
- Removed RN APIs the template avoided: `InteractionManager`, root `Touchable`, `Modal.animated`,
  `StatusBar.backgroundColor/translucent/networkActivityIndicatorVisible`; `ImageBackground` is deprecated

### 🐛 Fixes

- `lib/mmkvStorage.ts` no longer imports `zustand/middleware`, so projects generated **without**
  Zustand type-check again
- Uniwind projects ship `types/uniwind.d.ts` (`/// <reference types="uniwind/types" />`) so
  `tsc --noEmit` passes before Metro generates `app/uniwind-types.d.ts`
- JSX text in the Unistyles/Uniwind screens is entity-escaped (`&apos;`) — `eslint-config-expo` 58
  turns `react/no-unescaped-entities` into an error
- Uniwind `modal.tsx` has a single `react-native` import
- `turbo.json` now includes `../../cli/**` in the `build` inputs: `bun run build:cli` no longer
  restores a stale Turbo cache when only `cli/src` or `cli/modules` changed

## [4.0.1] - 2026-08-13

Same as 4.0.0. npm version `4.0.0` was already used (and unpublished) in December 2025, so this release ships as **4.0.1**.

### ⚡ Expo SDK 57

Generated apps now target **Expo SDK 57** (React Native 0.86.2, React 19.2.3, TypeScript 6.0).

This is a major upgrade from SDK 54. New projects require **Node.js 22.13+**.

### 🎨 Updated styling options

| Option | Version |
| --- | --- |
| NativeWind | 4.2.6 |
| Unistyles | 3.3.0 |
| Uniwind | 1.10.1 |

### 📦 Stack bump

- MMKV **4.3.2** + Nitro Modules **0.36.5**
- TanStack Query **5.101.4**
- Zustand **5.0.14**
- Reanimated **4.5.1** + Worklets **0.10.1**
- Gesture Handler **2.32**, Keyboard Controller **1.21.9**
- expo-haptics **57.0.1**, expo-dev-client **57.0.11**, expo-router **57.0.12**

### 🧱 Continuous Native Generation

`ios/` and `android/` are no longer committed in the template. After scaffolding:

```bash
npx expo prebuild
bun ios   # or bun android
```

### 🔧 Breaking changes in generated apps

- Expo Router theme imports now use `expo-router/react-navigation` (React Navigation is no longer a direct dependency)
- Removed `EXPO_USE_FAST_RESOLVER` (gone since SDK 55)
- Removed `edgeToEdgeEnabled` / `newArchEnabled` from app.json (always-on in SDK 55+)

### 🐛 Fixes

- Uniwind `setTheme('premium')` now applies the third theme correctly
- CLI next steps respect the chosen package manager (npm / yarn / pnpm / bun)
- Jest dependencies are fully removed when Jest is not selected
- `.gitignore` is copied into generated projects
