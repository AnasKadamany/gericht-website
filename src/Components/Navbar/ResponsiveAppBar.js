// MaterialUI
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

// CSS
import "./Navbar.css";
import "animate.css";

// OTHERS
import React, { useState } from "react";
import images from "../../assets/gericht.webp";
import { Link } from "react-scroll";

const ResponsiveAppBar = () => {
  const [isSmallIconClicked, setSmallIconClicked] = useState(false);

  const handleSmallIconClick = () => {
    setSmallIconClicked(!isSmallIconClicked);
  };

  return (
    <div
      style={{
        background: "#0c0c0c",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
      }}
    >
      <div>
        <img
          className="animate__animated animate__flash"
          style={{ width: "199px" }}
          src={images}
          alt="Logo"
        />
      </div>
      {isSmallIconClicked ? (
        <div className="Overlay animate__animated animate__slideInDown">
          <RestaurantMenuIcon
            onClick={handleSmallIconClick}
            style={{
              color: "gold",
              position: "absolute",
              top: "30px",
              right: "40px",
              fontSize: "27px",
            }}
          />
          <Link
            to="home-section"
            smooth={true}
            duration={500}
            offset={-200}
            spy={true}
          >
            <p onClick={handleSmallIconClick} style={{ cursor: "pointer" }}>
              Home
            </p>
          </Link>
          <Link
            to="about-section"
            smooth={true}
            duration={500}
            offset={0}
            spy={true}
          >
            <p onClick={handleSmallIconClick} style={{ cursor: "pointer" }}>
              About
            </p>
          </Link>
          <Link
            to="menu-section"
            smooth={true}
            duration={500}
            offset={150}
            spy={true}
          >
            <p onClick={handleSmallIconClick} style={{ cursor: "pointer" }}>
              Menu
            </p>
          </Link>
          <Link
            to="award-section"
            smooth={true}
            duration={500}
            offset={50}
            spy={true}
          >
            <p onClick={handleSmallIconClick} style={{ cursor: "pointer" }}>
              Awards
            </p>
          </Link>
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
          >
            <p onClick={handleSmallIconClick} style={{ cursor: "pointer" }}>
              Contact
            </p>
          </Link>
        </div>
      ) : (
        <>
          <div
            className="NavbarMid"
            style={{
              display: "flex",
              width: "410px",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Link
              to="home-section"
              smooth={true}
              duration={500}
              offset={-200}
              spy={true}
            >
              <p style={{ cursor: "pointer" }}>Home</p>
            </Link>
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              offset={0}
              spy={true}
            >
              <p style={{ cursor: "pointer" }}>About</p>
            </Link>
            <Link
              to="menu-section"
              smooth={true}
              duration={500}
              offset={150}
              spy={true}
            >
              <p style={{ cursor: "pointer" }}>Menu</p>
            </Link>
            <Link
              to="award-section"
              smooth={true}
              duration={500}
              offset={50}
              spy={true}
            >
              <p style={{ cursor: "pointer" }}>Awards</p>
            </Link>
            <Link
              to="contact-section"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
            >
              <p style={{ cursor: "pointer" }}>Contact</p>
            </Link>
          </div>
          <div
            className="NavbarLeft"
            style={{
              width: "250px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "60px",
            }}
          >
            <p>Log In / Register</p>
            <div
              style={{
                width: "1px",
                height: "30px",
                background: "#aaa",
              }}
            ></div>
            <p>Book Table</p>
          </div>
          <div
            className="NavbarRight SmallPage"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DensitySmallIcon onClick={handleSmallIconClick} />
          </div>
        </>
      )}
    </div>
  );
};

export default ResponsiveAppBar;
