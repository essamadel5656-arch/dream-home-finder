import { useState, useMemo } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import PropertyCard from "@/components/PropertyCard";
import PropertyModal from "@/components/PropertyModal";
import SiteFooter from "@/components/SiteFooter";
import { listings, type Property } from "@/data/listings";

const Index = () => {
  const [filters, setFilters] = useState({ city: "all", type: "all", price: "all", bedrooms: "all" });
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filtered = useMemo(() => {
    return listings.filter((p) => {
      if (filters.city !== "all" && p.city !== filters.city) return false;
      if (filters.type !== "all" && p.type !== filters.type) return false;
      if (filters.bedrooms !== "all" && p.bedrooms < Number(filters.bedrooms)) return false;
      if (filters.price !== "all") {
        const [min, max] = filters.price.split("-").map(Number);
        if (p.price < min || p.price > max) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <HeroSection />
      <FilterBar filters={filters} onChange={handleFilterChange} />

      <main className="container flex-1 py-10">
        <h2 className="mb-6 font-display text-2xl font-bold">
          {filtered.length} {filtered.length === 1 ? "Property" : "Properties"} Found
        </h2>
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">No properties match your filters. Try adjusting your criteria.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} onViewDetails={setSelectedProperty} />
            ))}
          </div>
        )}
      </main>

      <PropertyModal property={selectedProperty} open={!!selectedProperty} onClose={() => setSelectedProperty(null)} />
      <SiteFooter />
    </div>
  );
};

export default Index;
