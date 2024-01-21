import "../Detaills/Details.css";
import SpoonImage from "../../assets/spoon.png";
import KnifeImage from "../../assets/knife.webp";
import { Link } from "react-scroll";
export default function Details() {
  return (
    <div id="about-section" className="DetailsBG">
      <div className="gBgDiv"></div>
      <div className="DetailsData">
        <div className="DetailsLeft">
          <h1 className="H1_cormorant">About Us</h1>
          <img src={SpoonImage} />
          <p className="p2_cormorant">
            The Original -- The OG -- reinvents the neighborhood eatery,
            combining timeless inspiration from classic Americana with inventive
            and playful modern flair.
          </p>
          <button className="LeftHeaderButton">Explore Menu</button>
        </div>
        <div className="DetailsMid">
          <img className="KnifeImage" src={KnifeImage} />
        </div>
        <div className="DetailsRight">
          <h1 className="H1_cormorant">Our History</h1>
          <img src={SpoonImage} />
          <p className="p2_cormorant">
            With influences ranging from the 1950s diner to the elegant railway
            dining cars of days past, you'll find a nostalgic collection of
            comforts, classics with a modern twist.
          </p>
          <button className="LeftHeaderButton">Explore Menu</button>
        </div>
      </div>
    </div>
  );
}
