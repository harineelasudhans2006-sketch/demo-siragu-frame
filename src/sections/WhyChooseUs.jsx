
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const frames = [
  {
    name: "Classic Wooden",
    type: "Natural Wooden Border",
    border: "wood",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000",
    sizes: [
      { size: "4 × 6", price: "₹399" },
      { size: "5 × 7", price: "₹499" },
      { size: "8 × 10", price: "₹699" },
      { size: "12 × 18", price: "₹999" },
    ],
  },
  {
    name: "Modern Metal",
    type: "Premium Metal Border",
    border: "metal",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1000",
    sizes: [
      { size: "4 × 6", price: "₹449" },
      { size: "5 × 7", price: "₹549" },
      { size: "8 × 10", price: "₹749" },
      { size: "12 × 18", price: "₹1099" },
    ],
  },
  {
    name: "Premium Golden",
    type: "Elegant Golden Border",
    border: "gold",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000",
    sizes: [
      { size: "4 × 6", price: "₹499" },
      { size: "5 × 7", price: "₹599" },
      { size: "8 × 10", price: "₹799" },
      { size: "12 × 18", price: "₹1199" },
    ],
  },
  {
    name: "Elegant White",
    type: "Minimal White Border",
    border: "white",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1000",
    sizes: [
      { size: "4 × 6", price: "₹399" },
      { size: "5 × 7", price: "₹499" },
      { size: "8 × 10", price: "₹699" },
      { size: "12 × 18", price: "₹999" },
    ],
  },
];

const imageVariants = {
  initial: {
    opacity: 0,
    x: 90,
    rotateY: 25,
    scale: 0.82,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -90,
    rotateY: -25,
    scale: 0.85,
    filter: "blur(6px)",
    transition: { duration: 0.4 },
  },
};

function WhyChooseUs() {
  const [activeFrame, setActiveFrame] = useState(0);

  const selectedFrame = frames[activeFrame];

  return (
    <section className="frame-guide" id="frame-types">

      <div className="frame-guide-header">
        <span>CRAFTED FOR YOUR MEMORIES</span>
        <h2>
          Find Your Perfect <i>Frame.</i>
        </h2>
        <p>
          Choose your favourite border style and explore
          the sizes and prices available.
        </p>
      </div>

      <div className="frame-guide-layout">

        {/* LEFT - FRAME IMAGE */}

        <div className="frame-guide-preview">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFrame}
              className="frame-preview-stage"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                className={`frame-preview-border ${selectedFrame.border}`}
                whileHover={{
                  scale: 1.035,
                  rotate: -1,
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="frame-preview-inner">
                  <img
                    src={selectedFrame.image}
                    alt={selectedFrame.name}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="frame-preview-caption">
            <span>0{activeFrame + 1} / 04</span>
            <p>{selectedFrame.name} Collection</p>
          </div>

        </div>

        {/* RIGHT - FRAME DETAILS */}

        <div className="frame-guide-details">

          <span className="frame-guide-label">
            EXPLORE FRAME STYLES
          </span>

          <div className="frame-style-list">
            {frames.map((frame, index) => (
              <button
                key={frame.name}
                className={`frame-style-option ${
                  activeFrame === index ? "selected" : ""
                }`}
                onClick={() => setActiveFrame(index)}
              >
                <span>0{index + 1}</span>
                <strong>{frame.name}</strong>
                <span className="frame-style-arrow">↗</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFrame}
              className="frame-price-details"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <span className="frame-guide-label">
                {selectedFrame.type}
              </span>

              <h3>{selectedFrame.name} Frame</h3>

              <div className="frame-size-heading">
                <span>AVAILABLE SIZES</span>
                <span>PRICE</span>
              </div>

              {selectedFrame.sizes.map((item) => (
                <div className="frame-price-row" key={item.size}>
                  <span>{item.size} inches</span>
                  <strong>{item.price}</strong>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;
