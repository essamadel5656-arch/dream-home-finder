import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Property } from "@/data/listings";

interface PropertyModalProps {
  property: Property | null;
  open: boolean;
  onClose: () => void;
}

const PropertyModal = ({ property, open, onClose }: PropertyModalProps) => {
  if (!property) return null;
  const formattedPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(property.price);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{property.title}</DialogTitle>
        </DialogHeader>
        <img src={property.image} alt={property.title} className="w-full rounded-lg object-cover aspect-video" />
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-2xl font-bold text-primary">{formattedPrice}</p>
            <Badge variant="secondary" className="text-sm">{property.type}</Badge>
          </div>
          <p className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-4 w-4" /> {property.location}
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {property.bedrooms > 0 && <span className="flex items-center gap-1.5"><Bed className="h-4 w-4" /> {property.bedrooms} Beds</span>}
            <span className="flex items-center gap-1.5"><Bath className="h-4 w-4" /> {property.bathrooms} Baths</span>
            <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4" /> {property.area} m²</span>
          </div>
          <p className="text-sm leading-relaxed text-foreground/80">{property.description}</p>
          <div>
            <h4 className="mb-2 text-sm font-semibold">Features</h4>
            <div className="flex flex-wrap gap-2">
              {property.features.map((f) => (
                <Badge key={f} variant="outline">{f}</Badge>
              ))}
            </div>
          </div>
          <Button className="w-full" size="lg">Contact Agent</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyModal;
