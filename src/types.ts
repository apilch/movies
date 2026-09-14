export type Category = "Action" | "Drama" | "Sci-Fi";

export type Film = {
  id: number;
  title: string;
  year: number;
  category: Category;
  description: string;
  image: string;
  accent: string;
};