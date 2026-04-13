import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterBarProps {
  filters: { city: string; type: string; price: string; bedrooms: string };
  onChange: (key: string, value: string) => void;
}

const FilterBar = ({ filters, onChange }: FilterBarProps) => {
  return (
    <section className="border-b bg-secondary/30">
      <div className="container py-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Select value={filters.city} onValueChange={(v) => onChange("city", v)}>
            <SelectTrigger><SelectValue placeholder="City" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              <SelectItem value="New York">New York</SelectItem>
              <SelectItem value="Los Angeles">Los Angeles</SelectItem>
              <SelectItem value="Miami">Miami</SelectItem>
              <SelectItem value="Chicago">Chicago</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.type} onValueChange={(v) => onChange("type", v)}>
            <SelectTrigger><SelectValue placeholder="Property Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Apartment">Apartment</SelectItem>
              <SelectItem value="Villa">Villa</SelectItem>
              <SelectItem value="Office">Office</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.price} onValueChange={(v) => onChange("price", v)}>
            <SelectTrigger><SelectValue placeholder="Price Range" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Price</SelectItem>
              <SelectItem value="0-500000">Under $500K</SelectItem>
              <SelectItem value="500000-1000000">$500K – $1M</SelectItem>
              <SelectItem value="1000000-99999999">$1M+</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.bedrooms} onValueChange={(v) => onChange("bedrooms", v)}>
            <SelectTrigger><SelectValue placeholder="Bedrooms" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Bedrooms</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
