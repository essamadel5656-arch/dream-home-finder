import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Beautiful residential neighborhood" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          Find Your Dream Home
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/80">
          Discover the perfect property from our curated collection of homes, apartments, and offices.
        </p>
        <div className="mt-8 flex items-center gap-2 rounded-xl bg-background/95 p-2 shadow-lg backdrop-blur">
          <Search className="ml-2 h-5 w-5 shrink-0 text-muted-foreground" />
          <input type="text" placeholder="Enter location, property type, or keyword..." className="flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground" />
          <Button size="lg">Search</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
