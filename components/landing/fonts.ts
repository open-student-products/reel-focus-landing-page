import { Inter, Playfair_Display } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  style: ["normal"],
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
