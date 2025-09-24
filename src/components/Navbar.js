import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic3 from "../images/pic3.jpeg";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <style>
        {`
          .custom-navbar {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
          }

          .custom-navbar .nav-link {
            color: brown !important;
            font-size: 1rem;
            padding: 6px 10px;
            transition: color 0.3s ease;
          }

          .custom-navbar .nav-link:hover {
            color: #5a2d0c !important;
          }

          .custom-button {
            font-size: 0.9rem;
            padding: 5px 10px;
          }

          @media (max-width: 768px) {
            .custom-navbar {
              gap: 8px;
            }

            .custom-navbar .nav-link {
              font-size: 0.85rem;
              padding: 4px 6px;
            }

            .custom-button {
              font-size: 0.8rem;
              padding: 4px 8px;
            }
          }
        `}
      </style>

      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#fdf5e6",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <div className="d-flex align-items-center justify-content-between px-3 py-2">
          {/* Left side logo */}
          <div>
            <img
              src={pic3}
              alt="Logo"
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right side Nav Items */}
          <Nav className="custom-navbar" activeKey={activePage}>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setActivePage("home")}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setActivePage("about")}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skills"
                onClick={() => setActivePage("skills")}
              >
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => setActivePage("projects")}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => setActivePage("contact")}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {/* Download button (PDF inside public folder) */}
              <a
                href="/Nyaburu_Margret_Daniela_CV.pdf"
                download="Nyaburu_Margret_Daniela_CV.pdf"
              >
                <Button
                  className="custom-button ms-2"
                  style={{ backgroundColor: "brown", borderColor: "brown" }}
                >
                  Download CV
                </Button>
              </a>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
