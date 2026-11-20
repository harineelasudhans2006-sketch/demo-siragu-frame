import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900",
    title: "Beautiful Memories",
  },
  {
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900",
    title: "Art Collection",
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
    title: "Elegant Moments",
  },
  {
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900",
    title: "Creative Stories",
  },
  {
    image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=900",
    title: "Timeless Memories",
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const getPosition = (index) => {
    let position = index - activeIndex;

    if (position > galleryImages.length / 2) {
      position -= galleryImages.length;
    }

    if (position < -galleryImages.length / 2) {
      position += galleryImages.length;
    }

    return position;
  };

  return (
    <section className="gallery" id="gallery">

      <div className="gallery-header">
        <span className="section-label">OUR FRAME GALLERY</span>

        <h2>
          Every Frame Holds
          <br />
          <span>A Beautiful Memory.</span>
        </h2>

        <p>
          Explore our collection of beautifully crafted photo frames.
          Every memory deserves a special place.
        </p>
      </div>

      <div className="circular-gallery">

        <div className="gallery-orbit">

          {galleryImages.map((item, index) => {
            const position = getPosition(index);
            const angle = position * 42;
            const radians = (angle * Math.PI) / 180;

            const x = Math.sin(radians) * 330;
            const y = (1 - Math.cos(radians)) * 105;

            const isActive = position === 0;
            const distance = Math.abs(position);

            return (
              <motion.div
                key={item.title}
                className={`orbit-card ${isActive ? "active-frame" : ""}`}
                animate={{
                  x,
                  y,
                  scale: isActive ? 1 : distance === 1 ? 0.76 : 0.55,
                  rotateY: position * -12,
                  rotateZ: position * -4,
                  opacity: distance > 2 ? 0 : distance === 2 ? 0.65 : 1,
                  zIndex: 10 - distance,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="orbit-frame">
                  <div className="orbit-frame-inner">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>

                <h3>{item.title}</h3>
              </motion.div>
            );
          })}

        </div>

        <div className="gallery-controls">

          <button onClick={prevSlide} aria-label="Previous frame">
            <ArrowLeft size={20} />
          </button>

          <span>
            0{activeIndex + 1}
            <small> / 0{galleryImages.length}</small>
          </span>

          <button onClick={nextSlide} aria-label="Next frame">
            <ArrowRight size={20} />
          </button>

        </div>

      </div>

      <div className="gallery-bottom">
        <span>YOUR MEMORIES. YOUR STYLE. YOUR STORY.</span>
      </div>

    </section>
  );
}

export default Gallery;