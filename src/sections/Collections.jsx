import { motion } from "framer-motion";

const products = [
  {
    name: "MINIMAL METAL FRAME",
    type: "metal",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800",
    price: "From ₹499",
  },
  {
    name: "CLASSIC WOODEN FRAME",
    type: "wood",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    price: "From ₹599",
  },
  {
    name: "MEMORY COLLAGE FRAME",
    type: "collage",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    price: "From ₹799",
  },
  {
    name: "GOLD TABLETOP FRAME",
    type: "gold",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: "From ₹699",
  },
];

function Collections() {
  return (
    <section className="collections-section" id="collections">
      <div className="collections-heading">
        <span>OUR COLLECTION</span>
        <h2>Frames for Every <i>Memory.</i></h2>
        <p>Beautifully crafted frames to make your moments timeless.</p>
      </div>

      <div className="collections-grid">
        {products.map((product, index) => (
          <motion.div
            className="collection-card"
            key={product.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
          >
            <div className="frame-stage">
              <div className={`photo-frame ${product.type}-frame`}>
                <img src={product.image} alt={product.name} />
              </div>
            </div>

            <div className="collection-info">
              <h3>{product.name}</h3>
              <span>{product.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bestseller-button-wrapper">
        <motion.a
          href="#gallery"
          className="bestseller-btn"
          whileHover="hover"
          initial="initial"
        >
          <span>VIEW BESTSELLERS</span>

          <motion.span
            className="bestseller-arrow"
            variants={{
              initial: { x: 0 },
              hover: { x: 7 },
            }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </motion.a>
      </div>

    </section>
  );
}

export default Collections;
