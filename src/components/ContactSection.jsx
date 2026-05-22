import { useState } from 'react';
import './ContactSection.css';

function ContactSection() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919876543210";

    const message = `
👋 Hello Marwar Services

I want to contact you.

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${messageText}

Please help me.
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    setName('');
    setEmail('');
    setMessageText('');
  };

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <span className="tag">
            CONTACT
          </span>

          <h2>
            Get in Touch
          </h2>

          <p className="contact-subtext">
            We are always ready to help you.
          </p>

          <div className="info">

            {/* <p>📞 +91 9876543210</p> */}

            <p>
              📧 infomarwarservices@gmail.com
            </p>

            <p>
              📍 Jodhpur, Rajasthan
            </p>

          </div>

          {/* INFO TOOLTIP */}
          {/* <div className="listing-tooltip">

            <span className="info-icon">
              ℹ️
            </span>

            <div className="tooltip-box">

              <p>
                Service listing costs
                <strong> ₹100/month</strong>.
              </p>

              <p>
                After payment, send the
                screenshot on WhatsApp.
              </p>

              <p>
                Admin verification usually
                takes around 1 hour.
              </p>

            </div>

          </div> */}

        </div>

        {/* FORM */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            value={messageText}
            onChange={(e) =>
              setMessageText(e.target.value)
            }
            required
          />

          <button type="submit">
            Send on WhatsApp
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactSection;