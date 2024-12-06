export interface CardProps {
  mainImage: string; // The main image of the property
  heartIcon: string; // Icon for saving/favoriting the card
  heading: string; // Short description or tagline for the property
  title: string; // Full title or name of the property
  location: string; // Address or location of the property
  locationIcon: string; // Icon for location representation
  icon1: string; // Icon for beds
  icon2: string; // Icon for baths
  icon3: string; // Icon for area (size)
  icon4: string; // Additional icon (e.g., price, or other property features)
  icon5: string; // Additional icon
  beds: number; // Number of beds
  baths: number; // Number of baths
  area: number; // Area of the property in square feet or meters
  price: number; // Price of the property
  status: string; // Status
}
