import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Phone,
    label: "CALL US",
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: Mail,
    label: "EMAIL US",
    value: "hello@siraguframe.com",
  },
  {
    icon: MapPin,
    label: "VISIT US",
    value: "Your Business Location",
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* LEFT */}
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">LET'S CONNECT</span>

          <h2>
            Have a memory
            <br />
            worth <span>framing?</span>
          </h2>

          <p>
            From a favourite family photograph to a
            completely personalised design, we're here
            to help turn your moments into something
            you'll treasure.
          </p>

          <div className="contact-details">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  href={
                    item.label === "CALL US"
                      ? "tel:+91XXXXXXXXXX"
                      : item.label === "EMAIL US"
                      ? "mailto:hello@siraguframe.com"
                      : "#"
                  }
                  className="contact-item"
                  key={item.label}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                >
                  <div className="contact-icon">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  <div>
                    <span>{item.label}</span>
                    <h4>{item.value}</h4>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          whileHover={{ y: -6 }}
        >
          <div className="contact-card-top">
            <span>SIRAGU FRAME</span>

            <div className="contact-round-icon">
              <MessageCircle size={20} />
            </div>
          </div>

          <div className="contact-card-content">
            <span className="contact-small-label">
              CUSTOM FRAME ENQUIRY
            </span>

            <h3>
              Let's create
              <br />
              something <em>beautiful.</em>
            </h3>

            <p>
              Have a photo, an idea or a special
              occasion in mind? Talk to us and we'll
              help you find the perfect frame.
            </p>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={18} />
              Start a Conversation
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-card-bottom">
            <span>PERSONALISED</span>
            <span>HANDCRAFTED</span>
            <span>TIMELESS</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;