import "../Contact/Contact.css";
import SpoonImage from "../../assets/spoon.png";
import GlassImage from "../../assets/findus.webp";
export default function Contact() {
  return (
    <div
      style={{ padding: "4rem 6rem" }}
      id="contact-section"
      className="FlexContainer"
    >
      <div style={{ textAlign: "left", width: "70%" }} className="flexColumn">
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ margin: "0" }} className="p_cormorant">
            Contact
          </p>
          <img src={SpoonImage} />
        </div>
        <h1
          style={{ fontSize: "60px", width: "100%", marginBottom: "2rem" }}
          className="H1_cormorant"
        >
          Find Us
        </h1>
        <p style={{ marginBottom: "2rem" }} className="p_opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <h1
          style={{ fontSize: "30px", width: "100%", marginBottom: "2rem" }}
          className="H1_cormorant"
        >
          Opening Hours
        </h1>
        <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
        <button className="LeftHeaderButton">Explore Menu</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className="GlassImage" style={{ width: "70%" }} src={GlassImage} />
      </div>
    </div>
  );
}
