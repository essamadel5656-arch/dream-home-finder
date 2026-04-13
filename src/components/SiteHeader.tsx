import { useState } from "react";
import { Search, Menu, X, Home } from "lucide-react";

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <Home className="h-6 w-6" />
          EstateHub
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Buy", "Rent", "About"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 rounded-lg border bg-secondary/50 px-3 py-1.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input type="text" placeholder="Search properties..." className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-4 pb-4 pt-2 space-y-3">
          {["Buy", "Rent", "About"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary">
              {link}
            </a>
          ))}
          <div className="flex items-center gap-2 rounded-lg border bg-secondary/50 px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input type="text" placeholder="Search..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
