import { MainTitle } from "@/components/MainTitle/MainTitle";
import { PackageButton } from "@/components/PackageButton/PackageButton";
import { TerminalCode } from "@/components/TerminalCode/TerminalCode";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <main className="min-h-screen bg-black py-20">
      <BackgroundLines className="flex flex-col gap-10 items-center justify-start">
        <MainTitle />
        <PackageButton />
        <TerminalCode />
      </BackgroundLines>
    </main>
  );
}
