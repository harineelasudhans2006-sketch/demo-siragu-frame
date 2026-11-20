import { useState, useEffect } from "react";
import { Search, UserRound, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Collections", href: "#collections" },
    { name: "Gallery", href: "#gallery" },
    { name: "Custom Frame", href: "#custom-frame" },
    { name: "Contact", href: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 30);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`minimal-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-left">
          <a href="#home">FRAME YOUR PHOTOS</a>
        </div>

        <a href="#home" className="minimal-logo">
          SIRAGU<span>FRAME</span>
        </a>

        <div className="header-actions">

          {/* Desktop icons */}
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            className="header-icon desktop-icon"
            aria-label="Account"
          >
            <UserRound size={22} strokeWidth={1.4} />
          </motion.a>

          <motion.button
            className="header-icon desktop-icon"
            whileHover={{ y: -2 }}
            aria-label="Search"
          >
            <Search size={22} strokeWidth={1.4} />
          </motion.button>

          <motion.a
            href="#collections"
            whileHover={{ y: -2 }}
            className="header-icon desktop-icon"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={22} strokeWidth={1.4} />
          </motion.a>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? (
              <X size={25} strokeWidth={1.4} />
            ) : (
              <Menu size={25} strokeWidth={1.4} />
            )}
          </button>

        </div>
      </header>

      {/* MOBILE SLIDE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />

            <motion.nav
              className="mobile-slide-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mobile-menu-top">
                <span>MENU</span>
                <span>01 — 06</span>
              </div>

              <div className="mobile-menu-links">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{
                      opacity: 0,
                      x: 35,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="menu-number">
                      0{index + 1}
                    </span>

                    <span className="menu-name">
                      {link.name}
                    </span>

                    <span className="menu-arrow">↗</span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="mobile-menu-footer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <span>SIRAGU FRAME.</span>
                <span>YOUR STORY. YOUR FRAME.</span>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;