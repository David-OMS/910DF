export type HeroImage = {
  id: string;
  label: string;
  description: string;
  src: string;
  /** Used by next/image; approximate is fine for layout */
  width: number;
  height: number;
  alt: string;
  credit: string;
};

export const DEFAULT_HERO_ID = "classroom";

export const HERO_IMAGES: HeroImage[] = [
  {
    id: "classroom",
    label: "Classroom focus",
    description: "Working hero — education lane, single subject, landscape.",
    src: "/images/heroes/hero-classroom.jpg",
    width: 4608,
    height: 3070,
    alt: "A primary-school boy writing in a notebook at his desk",
    credit: "Michele Ferrari / Pexels",
  },
  {
    id: "green-shirt",
    label: "Green shirt portrait",
    description: "Backup — younger child, warmer smile, tighter crop.",
    src: "/images/heroes/hero-green-shirt.jpg",
    width: 3446,
    height: 3168,
    alt: "A young boy in a green shirt smiling toward the camera",
    credit: "Umar Farouk / Pexels",
  },
];

export function getHeroById(id: string): HeroImage | undefined {
  return HERO_IMAGES.find((hero) => hero.id === id);
}

export const HERO_STORAGE_KEY = "910df-hero-image";
export const HERO_GREYSCALE_STORAGE_KEY = "910df-hero-greyscale";
