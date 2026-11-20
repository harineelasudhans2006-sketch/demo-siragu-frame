import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight, Minus, Plus } from "lucide-react";

const frameColors = [
    { name: "Maple", color: "#c58a52" },
    { name: "Black", color: "#202020" },
    { name: "Natural Wood", color: "#ad8055" },
    { name: "Brown", color: "#68412f" },
    { name: "Blonde", color: "#e5c99a" },
];

const frameSizes = [
    '10" x 12"',
    '12" x 12"',
    '12" x 16"',
    '16" x 20"',
    '18" x 24"',
    '24" x 24"',
    '24" x 36"',
];

function CustomFrame() {
    const [selectedColor, setSelectedColor] = useState("Maple");
    const [selectedSize, setSelectedSize] = useState('10" x 12"');
    const [quantity, setQuantity] = useState(1);
    const [cartCount, setCartCount] = useState(0);
    const [message, setMessage] = useState("");

    const currentColor = frameColors.find(
        (item) => item.name === selectedColor
    );

    const addToCart = () => {
        setCartCount((prev) => prev + quantity);
        setMessage(`${quantity} frame(s) added to your cart.`);
    };

    const buyNow = () => {
        setMessage(
            `Your ${selectedColor} frame (${selectedSize}) is ready. Connect your checkout to complete the order.`
        );
    };

    return (
        <section className="custom-frame" id="custom-frame">
            <div className="custom-frame-heading">
                <span>DESIGNED BY YOU</span>
                <h2>
                    Create Your Own <i>Frame.</i>
                </h2>
                <p>
                    Choose your favourite frame colour and size.
                    Make something special for your memories.
                </p>
            </div>

            <div className="custom-frame-layout">

                {/* LEFT - FRAME PREVIEW */}
                <div className="custom-frame-preview">
                    <div className="preview-top-label">
                        <span>LIVE PREVIEW</span>
                        <span>01 / CUSTOM FRAME</span>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedColor}
                            className="custom-frame-stage"
                            initial={{
                                opacity: 0,
                                scale: 0.88,
                                rotateY: 35,
                                x: 35,
                                filter: "blur(5px)",
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                rotateY: 0,
                                x: 0,
                                filter: "blur(0px)",
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                rotateY: -25,
                                x: -25,
                                filter: "blur(4px)",
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <motion.div
                                className="custom-frame-border"
                                style={{
                                    "--frame-color": currentColor.color,
                                }}
                                animate={{
                                    rotateZ: [0, -1.5, 0],
                                    scale: [0.96, 1, 1],
                                }}
                                transition={{ duration: 0.65 }}
                            >
                                <div className="custom-frame-inner">
                                    <div className="fabric-texture">
                                        <span>YOUR PHOTO GOES HERE</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="preview-caption">
                        <span>{selectedColor} Finish</span>
                        <span>{selectedSize}</span>
                    </div>
                </div>

                {/* RIGHT - CUSTOMIZATION */}
                <div className="custom-frame-options">

                    <div className="custom-option-group">
                        <div className="custom-option-title">
                            <h3>01. Choose Frame Colour</h3>
                            <span>{selectedColor}</span>
                        </div>

                        <div className="frame-color-options">
                            {frameColors.map((item) => (
                                <button
                                    key={item.name}
                                    className={`frame-color-option ${selectedColor === item.name ? "active" : ""
                                        }`}
                                    onClick={() => {
                                        setSelectedColor(item.name);
                                        setMessage("");
                                    }}
                                    aria-label={`Select ${item.name}`}
                                    title={item.name}
                                >
                                    <span
                                        className="color-swatch"
                                        style={{ background: item.color }}
                                    />
                                    <span className="color-name">{item.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="custom-option-group">
                        <div className="custom-option-title">
                            <h3>02. Select Frame Size</h3>
                            <span>Inches</span>
                        </div>

                        <div className="frame-size-options">
                            {frameSizes.map((size) => (
                                <button
                                    key={size}
                                    className={selectedSize === size ? "active" : ""}
                                    onClick={() => {
                                        setSelectedSize(size);
                                        setMessage("");
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="custom-option-group quantity-group">
                        <div className="custom-option-title">
                            <h3>03. Quantity</h3>
                        </div>

                        <div className="quantity-control">
                            <button
                                onClick={() =>
                                    setQuantity((prev) => Math.max(1, prev - 1))
                                }
                                aria-label="Decrease quantity"
                            >
                                <Minus size={15} />
                            </button>

                            <span>{quantity}</span>

                            <button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                aria-label="Increase quantity"
                            >
                                <Plus size={15} />
                            </button>
                        </div>
                    </div>

                    <div className="custom-frame-buttons">
                        <button className="add-cart-btn" onClick={addToCart}>
                            <ShoppingBag size={17} />
                            Add to Cart
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </button>

                        <button className="buy-now-btn" onClick={buyNow}>
                            Buy Now
                            <ArrowRight size={17} />
                        </button>
                    </div>

                    {message && (
                        <p className="custom-frame-message" role="status">
                            {message}
                        </p>
                    )}

                    <p className="custom-frame-note">
                        Every frame is made to complement your beautiful memories.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CustomFrame;