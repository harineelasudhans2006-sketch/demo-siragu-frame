
import { useState } from "react";
import { motion } from "framer-motion";

const frames = [
  {
    name: "Classic Wooden Frame",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700",
    style: "classic-wood",
  },
  {
    name: "Modern Black Frame",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=700",
    style: "modern-black",
  },
  {
    name: "Luxury Gold Frame",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700",
    style: "luxury-gold",
  },
  {
    name: "Minimal White Frame",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700",
    style: "minimal-white",
  },
  {
    name: "Natural Oak Frame",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700",
    style: "natural-oak",
  },
  {
    name: "Dark Brown Frame",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700",
    style: "dark-brown",
  },
];

function About() {
  const [selectedFrame, setSelectedFrame] = useState(null);

  return (
    <section className="about-gallery" id="about">

      {/* LEFT FRAME GALLERY */}

      <div className="about-gallery-wall">

        <div className="about-frame-grid">
          {frames.map((frame, index) => (
            <motion.button
              type="button"
              key={frame.name}
              className={`gallery-frame ${frame.style} ${
                selectedFrame === index ? "selected" : ""
              }`}
              onClick={() =>
                setSelectedFrame(
                  selectedFrame === index ? null : index
                )
              }
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -12,
                rotateX: 2,
                transition: { duration: 0.3 },
              }}
              whileTap={{ y: -8 }}
              style={{ zIndex: selectedFrame === index ? 5 : 1 }}
            >
              <div className="gallery-frame-mat">
                <img src={frame.image} alt={frame.name} />
              </div>

              <span className="gallery-frame-label">
                {frame.name}
              </span>
            </motion.button>
          ))}
        </div>

      </div>

      {/* RIGHT ABOUT CONTENT */}

      <div className="about-gallery-content">

        <span className="about-gallery-label">
          ABOUT SIRAGU FRAME
        </span>

        <h2>
          Every memory
          <br />
          deserves a
          <br />
          <i>beautiful</i> place.
        </h2>

        <p>
          At Siragu Frame, we believe every memory deserves
          a beautiful place in your home. From cherished
          moments to meaningful celebrations, we create
          elegant frames that last forever.
        </p>

        <div className="about-gallery-stats">

          <div>
            <h3>100%</h3>
            <span>Quality Focus</span>
          </div>

          <div>
            <h3>Custom</h3>
            <span>Made For You</span>
          </div>

          <div>
            <h3>Unique</h3>
            <span>Designs</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
