import type { Category, Film } from "./types";

export const films: Film[] = [
  {
    id: 1,
    title: "Neon Run",
    year: 2025,
    category: "Action",
    description: "A courier races across a rain-soaked megacity with one impossible package and every mercenary in the city hunting her.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
    accent: "#ff4d5a"
  },
  {
    id: 2,
    title: "Iron Horizon",
    year: 2024,
    category: "Action",
    description: "An ex-special forces pilot returns for one last rescue mission when a rogue satellite threatens a city below.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=85",
    accent: "#ff4d5a"
  },
  {
    id: 3,
    title: "Last Stand",
    year: 2023,
    category: "Action",
    description: "Trapped in a remote mountain facility, a lone operative must hold the line until dawn.",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=85",
    accent: "#ff4d5a"
  },
  {
    id: 4,
    title: "Midnight Chase",
    year: 2022,
    category: "Action",
    description: "Two rival drivers discover the same secret and race through the city to stay alive.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    accent: "#ff4d5a"
  },
  {
    id: 5,
    title: "Glass Letters",
    year: 2025,
    category: "Drama",
    description: "A daughter returns home and uncovers a lifetime of unsent letters that reshape her family's story.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85",
    accent: "#d6a85f"
  },
  {
    id: 6,
    title: "The Quiet Room",
    year: 2024,
    category: "Drama",
    description: "Three strangers share a waiting room during one long night and slowly reveal why they are there.",
    image: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?auto=format&fit=crop&w=1200&q=85",
    accent: "#d6a85f"
  },
  {
    id: 7,
    title: "After the Rain",
    year: 2023,
    category: "Drama",
    description: "A retired musician finds an old recording that forces him to confront the choices he left behind.",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=85",
    accent: "#d6a85f"
  },
  {
    id: 8,
    title: "Northbound",
    year: 2021,
    category: "Drama",
    description: "A road trip becomes a quiet reckoning between a father and the son he barely knows.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=85",
    accent: "#d6a85f"
  },
  {
    id: 9,
    title: "Orbit Zero",
    year: 2026,
    category: "Sci-Fi",
    description: "A deep-space crew receives a signal that appears to come from Earth—thirty years in the future.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=85",
    accent: "#66d9ff"
  },
  {
    id: 10,
    title: "Synthetic Dawn",
    year: 2025,
    category: "Sci-Fi",
    description: "The first sentient android wakes up with memories of a life that never happened.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    accent: "#66d9ff"
  },
  {
    id: 11,
    title: "Beyond Europa",
    year: 2024,
    category: "Sci-Fi",
    description: "Scientists beneath Europa's ice discover an ecosystem that has been watching them back.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=85",
    accent: "#66d9ff"
  },
  {
    id: 12,
    title: "The Last Signal",
    year: 2023,
    category: "Sci-Fi",
    description: "A radio astronomer has seven days to decode a message before the stars above Earth go dark.",
    image: "https://images.unsplash.com/photo-1534791547706-9f479e4e2f4d?auto=format&fit=crop&w=1200&q=85",
    accent: "#66d9ff"
  }
];

export const categories: Category[] = ["Action", "Drama", "Sci-Fi"];