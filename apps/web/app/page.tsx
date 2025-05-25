import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { OrbitingCirclesDemo } from "@/components/OrbitingCircleDemo";
import { TerminalDemo } from "@/components/TerminalDemo";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black flex flex-col gap-10 items-center justify-center py-10">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-blue-500"
      />
      {/* <TerminalDemo />
      <OrbitingCirclesDemo /> */}
    </main>
  );
}
