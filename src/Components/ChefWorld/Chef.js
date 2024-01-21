import "../ChefWorld/Chef.css";
import chefImage from "../../assets/chef.webp";
import SpoonImage from "../../assets/spoon.png";
import QuoteImg from "../../assets/quote.webp";
import SignImg from "../../assets/sign.webp";
export default function Chef() {
  return (
    <div className="ProfileContainer">
      <div className="ImageDiv">
        <img className="ChefImg" style={{ width: "55%" }} src={chefImage} />
      </div>
      <div className="RightContainerDiv">
        <div className="Title">
          <div style={{ marginBottom: "1rem" }}>
            <p className="RightContainerSmallTitleParagragh">Chef’s Word</p>
            <img src={SpoonImage} />
          </div>
          <h1 style={{ marginBottom: "3rem" }} className="H1Title_cormorant">
            What We Believe In
          </h1>
        </div>
        <div style={{ marginBottom: "2rem" }} className="Quote">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <img style={{ width: "5%", marginRight: "5px" }} src={QuoteImg} />
            <p className="QuoteWords">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
              .
            </p>
          </div>
          <p style={{ textAlign: "left" }} className="QuoteWords">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <div className="FounderName">
          <h4 className="h4Coromorant">Kevin Luo</h4>
          <p className="QuoteWords">Chef & Founder</p>
        </div>
        <div className="SignImg">
          <img style={{ width: "40%", marginTop: "2rem" }} src={SignImg} />
        </div>
      </div>
    </div>
  );
}
