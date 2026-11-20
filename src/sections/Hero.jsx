
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    tag: "PRESERVE YOUR BEAUTIFUL MOMENTS",
    title: "Memories That Deserve",
    highlight: "To Be Framed.",
    description:
      "Turn your favourite photographs into timeless pieces of art with beautifully crafted frames.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1800",
  },
  {
    tag: "DESIGNED WITH LOVE",
    title: "Your Walls, Your",
    highlight: "Beautiful Stories.",
    description:
      "Give your home a personal touch with elegant photo frames and creative wall displays.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800",
  },
  {
    tag: "MAKE EVERY MOMENT SPECIAL",
    title: "A Perfect Frame",
    highlight: "For Every Memory.",
    description:
      "Discover unique frame collections made to celebrate the moments that matter most.",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1800",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[activeSlide];

  return (
    <section className="hero-slider" id="home">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          className="hero-slide"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-overlay"></div>

          <motion.div
            className="hero-slide-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="hero-tag">{slide.tag}</span>

            <h1>
              {slide.title}
              <br />
              <span>{slide.highlight}</span>
            </h1>

            <p>{slide.description}</p>

            <a href="#collections" className="hero-shop-btn">
              Explore Collection <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-slider-controls">

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={activeSlide === index ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="hero-slide-count">
        0{activeSlide + 1} <span>/ 0{slides.length}</span>
      </div>
    </section>
  );
}

export default Hero;
