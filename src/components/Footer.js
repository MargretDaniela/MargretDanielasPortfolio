import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* ✅ Embedded CSS */}
      <style>
        {`
          .footer {
            background-color: brown;
            color: #fdf5e6;
            padding: 40px 20px 20px;
            text-align: center;
          }

          .footer h5 {
            font-weight: bold;
            margin-bottom: 15px;
          }

          /* ✅ Make all links white */
          .footer a {
            color: #ffffff;
            text-decoration: none;
            position: relative;
            padding-bottom: 2px;
            transition: color 0.3s ease;
          }

          /* ✅ Beige underline effect on hover */
          .footer a::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: #fdf5e6;
            transition: width 0.3s ease;
          }

          .footer a:hover::after {
            width: 100%;
          }

          /* ✅ Social icons */
          .icon-hover {
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .icon-hover svg {
            color: #ffffff; /* Default white */
          }

          .icon-hover:hover svg {
            transform: scale(1.2);
            color: #fdf5e6 !important; /* Turns beige on hover */
          }

          .footer-bottom {
            margin-top: 20px;
            font-size: 0.85rem;
            border-top: 1px solid rgba(253, 245, 230, 0.5);
            padding-top: 10px;
          }

          /* ✅ Responsive adjustments */
          @media (max-width: 768px) {
            .footer {
              text-align: center;
            }
            .footer h5 {
              margin-top: 20px;
            }
          }
        `}
      </style>

      <footer className="footer">
        <Container>
          <Row>
            {/* Quick Links */}
            <Col xs={12} md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </Col>

            {/* Contact */}
            <Col xs={12} md={4}>
              <h5>Contact</h5>
              <p>Email: <a href="mailto:nyaburu@example.com">nyaburu@example.com</a></p>
              <p>Phone: +256 700 123 456</p>
              <p>Kampala, Uganda</p>
            </Col>

            {/* Social Media */}
            <Col xs={12} md={4}>
              <h5>Follow Me</h5>
              <div className="d-flex justify-content-center gap-4 text-3xl">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/256767724297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-hover text-decoration-none"
                >
                  <FaWhatsapp size={28} />
                </a>
                {/* Twitter */}
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-hover text-decoration-none"
                >
                  <FaTwitter size={28} />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/YourUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-hover text-decoration-none"
                >
                  <FaLinkedin size={28} />
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-hover text-decoration-none"
                >
                  <FaInstagram size={28} />
                </a>
                {/* Email */}
                <a
                  href="mailto:danielamargret6@gmail.com"
                  className="icon-hover text-decoration-none"
                >
                  <FaEnvelope size={28} />
                </a>
              </div>
            </Col>
          </Row>

          {/* Bottom */}
          <Row>
            <Col className="footer-bottom">
              © {new Date().getFullYear()} Nyaburu Margret Daniela. All rights reserved.
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
