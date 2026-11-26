# Expo SDK 58 — version matrix (before / after)

Generated on 2026-11-26 while upgrading `fast-expo-app` from Expo SDK 57 to **SDK 58**.

**Source of truth for Expo / React Native packages:** `bundledNativeModules.json` shipped
inside `expo@58.0.26` — that is exactly what `npx expo install` resolves. Non-Expo packages
were resolved from the npm registry on the same date.

## Core

| Package | Before (SDK 57) | After (SDK 58) | Source |
| --- | --- | --- | --- |
| expo | ~57.0.12 | **~58.0.26** | bundled |
| react | 19.2.3 | **19.3.0** | bundled |
| react-dom | 19.2.3 | **19.3.0** | bundled |
| react-native | 0.86.2 | **0.88.1** | bundled |
| expo-router | ~57.0.12 | **~58.0.32** | bundled |
| expo-constants | ~57.0.10 | **~58.0.16** | bundled |
| expo-dev-client | ~57.0.11 | **~58.0.21** | bundled |
| expo-font | ~57.0.1 | **~58.0.12** | bundled |
| expo-haptics | ~57.0.1 | **~58.0.8** | bundled |
| expo-linking | ~57.0.5 | **~58.0.17** | bundled |
| expo-splash-screen | ~57.0.6 | **~58.0.14** | bundled |
| expo-status-bar | ~57.0.1 | **~58.0.5** | bundled |
| expo-system-ui | ~57.0.2 | **~58.0.7** | bundled |
| expo-web-browser | ~57.0.2 | **~58.1.0** | bundled |
| @expo/vector-icons | ^15.0.2 | ^15.0.2 | bundled (latest 15.1.1 satisfies range) |
| react-native-gesture-handler | ~2.32.0 | **~3.3.0** | bundled (major bump) |
| react-native-reanimated | 4.5.1 | **4.7.1** | bundled |
| react-native-worklets | 0.10.1 | **0.13.0** | bundled |
| react-native-safe-area-context | ~5.7.0 | **~5.11.1** | bundled |
| react-native-screens | ~4.26.0 | **~4.30.1** | bundled |
| react-native-web | ~0.21.0 | **~0.21.4** | bundled |

## Tooling

| Package | Before | After | Note |
| --- | --- | --- | --- |
| typescript | ~6.0.3 | **~6.0.3** | stayed on the 6.x line: TS 7.0.2 is out but too fresh for RN 0.88 / Expo 58 (the SDK 58 default template still pins `~6.0.3`) |
| @types/react | ~19.2.2 | **~19.3.0** | |
| eslint-config-expo | ~57.0.1 | **~58.0.4** | bundled |
| eslint | ^9.31.0 | ^9.31.0 | unchanged (flat config) |
| jest-expo | ~57.0.4 | **~58.0.15** | bundled; internals are now jest 30 |
| jest | ~29.7.0 | **~30.5.2** | jest-expo 58 ships jest 30 internals (`babel-jest`, `jest-mock`, `@jest/globals` all `^30`) |
| react-test-renderer | 19.2.3 | **19.3.0** | must match react |
| @testing-library/react-native | — | **^14.1.0** | required by `expo-router/testing-library` in SDK 58; 14.x no longer needs react-test-renderer (uses `test-renderer`) |
| tailwindcss (NativeWind) | 3.4.17 | **3.4.19** | NativeWind 4 stays on Tailwind v3 |

## Styling stacks

| Stack | Before | After | Compatibility / API work |
| --- | --- | --- | --- |
| nativewind | 4.2.6 | **4.2.7** | peer `tailwindcss >3.3.0`; unchanged API (`withNativeWind`, `useColorScheme`, `nativewind/preset`) |
| react-native-unistyles | 3.3.0 | **3.9.0** | peer `react-native >=0.85.0`, `react-native-edge-to-edge`, `react-native-nitro-modules`. **The Babel plugin is deprecated in 3.9** → replaced by `withUnistylesConfig` from `react-native-unistyles/metro` in `metro.config.js` (no options: no `root` / `autoProcessRoot` / `autoProcessImports`) |
| uniwind | 1.10.1 | **1.14.0** | peer `tailwindcss >=4`, `react-native >=0.81`. `withUniwindConfig` keeps `cssEntryFile` / `dtsFile` / `extraThemes`; `Uniwind.setTheme`, `useUniwind` and `withUniwind` unchanged |
| tailwindcss (Uniwind) | 4.1.16 | **4.3.5** | runtime dependency (Tailwind v4), as before |

## Other dependencies

| Package | Before | After | Note |
| --- | --- | --- | --- |
| react-native-mmkv | 4.3.2 | 4.3.2 | already latest |
| react-native-nitro-modules | 0.36.5 | **0.37.2** | required by MMKV 4.3 / Unistyles 3.9 |
| @tanstack/react-query | 5.101.4 | **5.108.4** | |
| @tanstack/react-query-persist-client | 5.101.4 | **5.108.4** | |
| @tanstack/query-sync-storage-persister | 5.101.4 | **5.108.4** | |
| zustand | 5.0.14 | **5.1.0** | |
| react-native-keyboard-controller | 1.21.9 | **1.22.7** | bundled. npm `latest` is 1.24.0, but the SDK 58 bundle pins **1.22.7**; we follow the bundle so `expo install --check` stays green and the native module matches the SDK |
| react-native-edge-to-edge | 1.8.1 | **1.8.2** | |
| @dev-plugins/react-native-mmkv | 0.4.0 | 0.4.0 | already latest |

## Workspace dependencies

| Workspace | Package | Before | After |
| --- | --- | --- | --- |
| packages/fast-expo-app | @clack/prompts | ^0.11.0 | **^1.9.0** |
| packages/fast-expo-app | kleur | ^4.1.5 | ^4.1.5 (latest) |
| root | turbo | ^2.6.0 | **^2.11.13** |
| root | prettier | ^3.6.2 | **^3.10.1** |
| root | typescript | ^5.9.2 | **^6.0.3** (aligned with the template) |
| root | eslint | ^8.57.0 | **^9.31.0** (flat config, aligned with the template) |
| www | next | 15.5.6 | see `www/package.json` (best-effort, does not gate the CLI) |
| www | react / react-dom | 19.1.0 | 19.3.0 (matches the template) |

## Breaking changes handled for generated apps

1. **`expo-router` theming imports** — SDK 58 exports `DarkTheme`, `DefaultTheme`, `ThemeProvider`
   and `useTheme` from the package root; `expo-router/react-navigation` re-exports them with
   `@deprecated` notices. All layouts now use `import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router'`.
2. **`Tabs`** — `import { Tabs } from 'expo-router'` still works but is deprecated in favour of
   `expo-router/js-tabs`. Tab layouts now import from `expo-router/js-tabs`.
3. **React Native Strict TypeScript API is the default** — deep imports from `react-native/Libraries/*`
   fail type-checking, refs use instance types (`ViewInstance`, `TextInputInstance`). The template
   type-checks cleanly without `customConditions` opt-out.
4. **Unistyles** — Babel plugin replaced by the Metro resolver (see above); theme typings unchanged
   (`declare module 'react-native-unistyles'` + `StyleSheet.configure`).
5. **`expo-router/testing-library`** requires `@testing-library/react-native >= 14`.
6. **Web** — `web.output` now defaults to `"server"`; the template keeps an explicit `"static"` output,
   and `app/+html.tsx` no longer calls navigation hooks.
7. **Removed RN APIs avoided**: `InteractionManager`, root `Touchable`, `Modal.animated`,
   `StatusBar.backgroundColor/translucent`. The template does not use them.
8. **Android** — R8 is enabled by default for release builds (documented in the changelog).
9. **Node.js** — 22.13+ / 24.3+ / 26+ (`engines.node` stays `>=22.13.0`).
10. **`unstable_settings.initialRouteName` → `anchor`** — SDK 58 logs a deprecation warning for the old key.
11. **Uniwind `dtsFile` moved out of `app/`** — `app/uniwind-types.d.ts` is picked up by Expo Router as a route
    (`Route "./uniwind-types.d.ts" is missing the required default export`). It now lives at the project root.
12. **`+not-found` above a modal** — SDK 58 warns that a `+not-found` route has no presentation and inherits the
    modal presentation. Forcing `presentation: 'card'` makes it *worse* (the screen is pushed behind the modal),
    so the template keeps the default and the notice is benign.
