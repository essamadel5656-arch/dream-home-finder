import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Property } from "@/data/listings";

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

const PropertyCard = ({ property, onViewDetails }: PropertyCardProps) => {
  const formattedPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(property.price);

  return (
    <div className="group overflow-hidden rounded-xl border bg-card shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={property.image} alt={property.title} loading="lazy" width={640} height={512} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
          {property.type}
        </span>
      </div>
      <div className="p-4">
        <p className="text-lg font-bold text-primary">{formattedPrice}</p>
        <h3 className="mt-1 font-semibold text-card-foreground">{property.title}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> {property.location}
        </p>
        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1"><Bed className="h-4 w-4" /> {property.bedrooms}</span>
          )}
          <span className="flex items-center gap-1"><Bath className="h-4 w-4" /> {property.bathrooms}</span>
          <span className="flex items-center gap-1"><Maximize className="h-4 w-4" /> {property.area} m²</span>
        </div>
        <Button className="mt-4 w-full" variant="outline" onClick={() => onViewDetails(property)}>
          View Details
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
