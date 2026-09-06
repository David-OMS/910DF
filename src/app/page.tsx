import { HomeActionStrip } from "@/components/sections/HomeActionStrip";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeSituation } from "@/components/sections/HomeSituation";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeActionStrip />
      <HomeSituation />
    </main>
  );
}
