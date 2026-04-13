import { Home } from "lucide-react";

const SiteFooter = () => (
  <footer className="border-t bg-secondary/30">
    <div className="container py-10">
      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <a href="/" className="flex items-center gap-2 font-display text-lg font-bold text-primary">
            <Home className="h-5 w-5" /> EstateHub
          </a>
          <p className="mt-2 text-sm text-muted-foreground">Your trusted partner in finding the perfect property.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Buy", "Rent", "About", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@estatehub.com</li>
            <li>+1 (555) 123-4567</li>
            <li>New York, NY 10001</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EstateHub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
