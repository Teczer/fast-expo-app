import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "../magicui/interactive-grid-pattern";
import { TerminalDemo } from "../TerminalDemo";
import { BackgroundLines } from "../ui/background-lines";

export function TerminalCode() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-purple-200"
      />
      <TerminalDemo />
    </BackgroundLines>
  );
}
