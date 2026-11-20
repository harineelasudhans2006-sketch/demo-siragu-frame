import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <a href="#home" className="footer-logo">
            SIRAGU<span>FRAME.</span>
          </a>

          <p>
            Turning your beautiful memories into timeless pieces of art.
            Every frame tells a story.
          </p>

          <a href="#contact" className="footer-enquire">
            Enquire Now
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#collections">Collections</a>
          <a href="#custom-frame">Create Your Frame</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </motion.div>

        {/* COLLECTIONS */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3>Collections</h3>

          <a href="#collections">Classic Frames</a>
          <a href="#collections">Minimal Metal</a>
          <a href="#collections">Collage Frames</a>
          <a href="#collections">Custom Frames</a>
          <a href="#collections">Photo Gallery</a>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <h3>Follow Us</h3>

          <p>
            Stay connected with Siragu Frame.
          </p>

          <div className="social-icons">

            <motion.a
              href="#"
              aria-label="Instagram"
              className="instagram"
              whileHover={{ y: -5, scale: 1.08 }}
            >
              <i className="fa-brands fa-instagram"></i>
            </motion.a>

            <motion.a
              href="#"
              aria-label="WhatsApp"
              className="whatsapp"
              whileHover={{ y: -5, scale: 1.08 }}
            >
              <i className="fa-brands fa-whatsapp"></i>
            </motion.a>

            <motion.a
              href="#"
              aria-label="Facebook"
              className="facebook"
              whileHover={{ y: -5, scale: 1.08 }}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </motion.a>

          </div>
        </motion.div>

      </div>

      {/* BOTTOM */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p>
          © 2026 SIRAGU FRAME. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms</a>

          <motion.a
            href="#home"
            className="back-top"
            whileHover={{ y: -4 }}
          >
            Back to Top ↑
          </motion.a>
        </div>

      </motion.div>

    </footer>
  );
}

export default Footer;
