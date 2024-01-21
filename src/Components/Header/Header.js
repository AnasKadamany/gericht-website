import "../Header/Header.css";
import HeaderLeftImage from "../../assets/spoon.png";
import HeaderRightImage from "../../assets/welcome.webp";
export default function Headers() {
  return (
    <div id="home-section" className="app-wrapper">
      {/* LeftHeader */}
      <div className="LeftHeader">
        <div style={{ marginBottom: "1rem" }}>
          <p className="p1_cormorant">Chase the new flavour</p>
          <img src={HeaderLeftImage} />
        </div>
        <h1 className="H1_cormorant">The key to Fine dining</h1>
        <p className="p2_cormorant">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button className="LeftHeaderButton">Explore Menu</button>
      </div>
      {/* LeftHeader */}
      <div className="RightHeader">
        <img className="RightHeaderImg" src={HeaderRightImage} />
      </div>
    </div>
  );
}
