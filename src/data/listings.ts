import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";
import prop5 from "@/assets/prop-5.jpg";
import prop6 from "@/assets/prop-6.jpg";

export interface Property {
  id: number;
  title: string;
  location: string;
  city: string;
  price: number;
  type: "Apartment" | "Villa" | "Office";
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  description: string;
  features: string[];
}

const images = [prop1, prop2, prop3, prop4, prop5, prop6];

export const listings: Property[] = [
  {
    id: 1, title: "Skyline Modern Apartment", location: "Downtown, New York", city: "New York",
    price: 450000, type: "Apartment", bedrooms: 2, bathrooms: 2, area: 95, image: images[0],
    description: "A stunning modern apartment with panoramic city views, open-plan living, and premium finishes throughout.",
    features: ["City View", "Gym Access", "Concierge", "Parking"],
  },
  {
    id: 2, title: "Mediterranean Villa", location: "Beverly Hills, Los Angeles", city: "Los Angeles",
    price: 1850000, type: "Villa", bedrooms: 5, bathrooms: 4, area: 380, image: images[1],
    description: "Elegant Mediterranean villa surrounded by lush gardens with a private pool and guest house.",
    features: ["Pool", "Garden", "Guest House", "Wine Cellar"],
  },
  {
    id: 3, title: "Minimalist Pool House", location: "Miami Beach, Miami", city: "Miami",
    price: 1200000, type: "Villa", bedrooms: 4, bathrooms: 3, area: 280, image: images[2],
    description: "Architectural masterpiece featuring clean lines, floor-to-ceiling windows, and an infinity pool.",
    features: ["Infinity Pool", "Smart Home", "Ocean Nearby", "Solar Panels"],
  },
  {
    id: 4, title: "Glass Tower Office", location: "Financial District, Chicago", city: "Chicago",
    price: 980000, type: "Office", bedrooms: 0, bathrooms: 2, area: 200, image: images[3],
    description: "Premium Grade-A office space in the heart of the financial district with state-of-the-art facilities.",
    features: ["24/7 Security", "Conference Rooms", "Fiber Internet", "Rooftop Access"],
  },
  {
    id: 5, title: "Suburban Family Home", location: "Oak Park, Chicago", city: "Chicago",
    price: 385000, type: "Villa", bedrooms: 3, bathrooms: 2, area: 180, image: images[4],
    description: "Charming family home in a quiet neighborhood with excellent schools and parks nearby.",
    features: ["Garage", "Backyard", "Fireplace", "Updated Kitchen"],
  },
  {
    id: 6, title: "Luxury Penthouse Suite", location: "Midtown, New York", city: "New York",
    price: 3200000, type: "Apartment", bedrooms: 3, bathrooms: 3, area: 220, image: images[5],
    description: "Ultra-luxury penthouse with a private rooftop terrace and breathtaking skyline views.",
    features: ["Rooftop Terrace", "Private Elevator", "Wine Room", "Spa Bathroom"],
  },
  {
    id: 7, title: "Coastal Studio Loft", location: "Santa Monica, Los Angeles", city: "Los Angeles",
    price: 320000, type: "Apartment", bedrooms: 1, bathrooms: 1, area: 55, image: images[0],
    description: "Sun-drenched studio loft steps from the beach, perfect for a creative lifestyle.",
    features: ["Beach Access", "Open Layout", "Hardwood Floors", "Balcony"],
  },
  {
    id: 8, title: "Tropical Garden Villa", location: "Coral Gables, Miami", city: "Miami",
    price: 920000, type: "Villa", bedrooms: 4, bathrooms: 3, area: 310, image: images[1],
    description: "Lush tropical estate with mature gardens, a koi pond, and resort-style outdoor living.",
    features: ["Tropical Garden", "Koi Pond", "Outdoor Kitchen", "Cabana"],
  },
  {
    id: 9, title: "Downtown Co-Work Hub", location: "Loop, Chicago", city: "Chicago",
    price: 550000, type: "Office", bedrooms: 0, bathrooms: 3, area: 350, image: images[3],
    description: "Versatile co-working space ideal for startups, with modular desks and private meeting rooms.",
    features: ["Meeting Rooms", "Kitchen", "Bike Storage", "Event Space"],
  },
  {
    id: 10, title: "Harborview Condo", location: "Battery Park, New York", city: "New York",
    price: 675000, type: "Apartment", bedrooms: 2, bathrooms: 2, area: 110, image: images[5],
    description: "Elegant waterfront condo with harbor views, modern kitchen, and access to a residents' club.",
    features: ["Harbor View", "Residents Club", "Doorman", "Storage"],
  },
  {
    id: 11, title: "Hillside Modern Estate", location: "Hollywood Hills, Los Angeles", city: "Los Angeles",
    price: 2750000, type: "Villa", bedrooms: 5, bathrooms: 5, area: 450, image: images[2],
    description: "Iconic hillside estate with sweeping views of LA, an infinity pool, and home theater.",
    features: ["Infinity Pool", "Home Theater", "City Views", "Wine Cellar"],
  },
  {
    id: 12, title: "Beachfront Office Suite", location: "South Beach, Miami", city: "Miami",
    price: 720000, type: "Office", bedrooms: 0, bathrooms: 2, area: 160, image: images[4],
    description: "Bright and airy office suite with ocean breezes and a creative, inspiring atmosphere.",
    features: ["Ocean View", "Open Plan", "Terrace", "Parking"],
  },
];
