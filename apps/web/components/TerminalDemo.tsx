import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; npx fast-expo-app@latest</TypingAnimation>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Framework detected: Expo</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ NativeWind integration validated</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Dark/Light mode toggle configured</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ File-based routing with Expo Router enabled</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ TypeScript strict mode activated</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Installed & configured MMKV storage</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Jest setup complete (Unit testing ready)</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5500} className="text-green-500">
        <span>✔ ESLint & Prettier configured</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6000} className="text-green-500">
        <span>✔ Absolute imports with @ prefix enabled</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6500} className="text-green-500">
        <span>✔ Dependencies installed via Bun</span>
      </AnimatedSpan>

      <AnimatedSpan delay={7000} className="text-blue-400">
        <span>✨ Your fast-expo-app is ready! Build, test, ship.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={7500} className="text-muted-foreground">
        <span>💡 Tip: Start coding in app/(tabs)/index.tsx</span>
      </AnimatedSpan>
    </Terminal>
  );
}
