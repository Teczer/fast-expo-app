import { RainbowButton } from "@/components/magicui/rainbow-button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TerminalDemo } from "@/components/TerminalDemo";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black py-10">
      <BackgroundLines className="relative flex flex-col gap-10 items-center justify-center">
        <SparklesText className="bg-black absolute top-20 self-center text-center w-1/2">
          The fastest way to create an{" "}
          <span className="text-orange-400">Expo</span> App
        </SparklesText>
        <RainbowButton>Rainbow Button</RainbowButton>
        <TerminalDemo />
        {/* <OrbitingCirclesDemo /> */}
      </BackgroundLines>
    </main>
  );
}
