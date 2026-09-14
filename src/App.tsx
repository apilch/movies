import { useEffect, useMemo, useState } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, Home, Plus, Trash2 } from "lucide-react";
import { categories, films } from "./data";
import type { Category, Film } from "./types";

const STORAGE_KEY = "reelwish-wishlist";

function useWishlist() {
  const [wishlist, setWishlist] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const toggle = (id: number) => {
    setWishlist((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  return { wishlist, toggle };
}

function Header({ count }: { count: number }) {
  return (
    <header className="header">
      
      <nav className="navbar">
        <Link to="/"><Home size={17} /> Home</Link>
        <Link to="/wishlist"><Heart size={17} fill="currentColor" /> Wishlist <b>{count}</b></Link>
      </nav>
    </header>
  );
}

function FilmCard({ film, wished }: { film: Film; wished: boolean }) {
  return (
    <Link to={`/film/${film.id}`} className="film-card" style={{ "--accent": film.accent } as React.CSSProperties}>
      <div className="poster-wrap">
        <img src={film.image} alt={film.title} />
        {wished && <span className="wish-dot"><Heart size={13} fill="currentColor" /></span>}
      </div>
      <div className="card-copy">
        <h3>{film.title}</h3>
        <span>{film.year}</span>
      </div>
    </Link>
  );
}

function Carousel({
  category,
  wishlist,
}: {
  category: Category;
  wishlist: number[];
}) {
  const items = films.filter((film) => film.category === category);

  const [start, setStart] = useState(1);
  const visible = 1;
let currentIem = 0;
  const maxStart = Math.max(0, items.length - visible);

  const canPrev = start > 1;
  const canNext = start < maxStart;



  const handlePrev = () => {
    setStart((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setStart((current) => Math.min(maxStart, current + 1));
  };

  return (
    <section
      className={`carousel-section ${category
        .toLowerCase()
        .replace("-", "")}`}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{category}</p>
          <h2>{category} picks</h2>
        </div>

        <div className="carousel-controls">
          <button
            disabled={!canPrev}
            onClick={handlePrev}
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          <button
            disabled={!canNext}
            onClick={handleNext}
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-{start * (100 / 4}%)`
          }}
        >
          {items.map((film, index) => (
            <div className="carousel-item" key={film.id} style={{
              display:  index +1 === start ? "block" : "none",
            }}>
              <FilmCard
                film={film}
                wished={wishlist.includes(film.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage({ wishlist }: { wishlist: number[] }) {
  return (
    <>
  

      <main id="browse" className="browse">
        <div className="browse-intro">
          <div>
            <h2>Find your next favorite</h2>
          </div>
          <Link to="/wishlist" className="text-link">View wishlist <ChevronRight size={16} /></Link>
        </div>
        {categories.map((category) => <Carousel key={category} category={category} wishlist={wishlist} />)}
      </main>
    </>
  );
}

function DetailPage({ wishlist, toggle }: { wishlist: number[]; toggle: (id: number) => void }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const film = films.find((item) => item.id === Number(id));

  if (!film) return <div className="empty-page"><h1>Film not found</h1><Link to="/">Back home</Link></div>;

  const isWished = wishlist.includes(film.id);
  const categoryClass = film.category.toLowerCase().replace("-", "");

  return (
    <main className={`detail-page ${categoryClass}`} style={{ "--accent": film.accent } as React.CSSProperties}>
      <button className="back-button" onClick={() => navigate(-1)}><ChevronLeft size={18} /> Back</button>
      <h3 >{film.category}</h3>
      <div className="detail-grid">
        <div className="detail-image">
          <img src={film.image} alt={film.title} />
        
        </div>
        <div className="detail-copy">
          
          <h1>{film.title}</h1>
          <p className="detail-description">{film.description}</p>
          <div className="detail-divider" />
          <button className={`wishlist-button ${isWished ? "active" : ""}`} onClick={() => toggle(film.id)}>
            {isWished ? <><Heart size={19} fill="currentColor" /> In your wishlist</> : <><Plus size={20} /> Add to wishlist</>}
          </button>
          
        </div>
      </div>
      <br/>
      <div className="info">Additional info</div>
    </main>
  );
}

function WishlistPage({ wishlist, toggle }: { wishlist: number[]; toggle: (id: number) => void }) {
  const saved = useMemo(() => films.filter((film) => wishlist.includes(film.id)), [wishlist]);

  return (
    <main className="wishlist-page">
      <div className="page-title">
        <div>
          <p className="eyebrow">YOUR COLLECTION</p>
          <h1>Wishlist <span>{saved.length}</span></h1>
        </div>
        <Link to="/" className="outline-button"><Home size={17} /> Browse films</Link>
      </div>
      {saved.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon"><Heart size={30} /></div>
          <h2>Your wishlist is empty</h2>
          <p>Add films from any detail page and they'll appear here.</p>
          <Link to="/" className="hero-button">Explore films <ChevronRight size={18} /></Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {saved.map((film) => (
            <div className="wish-item" key={film.id}>
              <FilmCard film={film} wished />
              <button className="remove-button" onClick={() => toggle(film.id)} aria-label={`Remove ${film.title}`}>
                <Trash2 size={16} /> Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default function App() {
  const { wishlist, toggle } = useWishlist();

  return (
    <div className="app">
      <Header count={wishlist.length} />
      <Routes>
        <Route path="/" element={<HomePage wishlist={wishlist} />} />
        <Route path="/film/:id" element={<DetailPage wishlist={wishlist} toggle={toggle} />} />
        <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} toggle={toggle} />} />
      </Routes>
    </div>
  );
}