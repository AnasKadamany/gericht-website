import "../Awards/Awards.css";
import SpoonImage from "../../assets/spoon.png";
import award1 from "../../assets/award01.webp";
import award2 from "../../assets/award02.webp";
import award3 from "../../assets/award03.webp";
import award5 from "../../assets/award05.webp";
import laurels from "../../assets/laurels.webp";
export default function Awards() {
  return (
    <div id="award-section" className="RewardsContainer">
      <div className="LeftContainer">
        <div className="ColumnDiv">
          <div>
            <p style={{ margin: "0" }} className="p_cormorant">
              Awards & Recognition
            </p>
            <img src={SpoonImage} />
          </div>
          <h1
            style={{
              width: "100%",
              fontSize: "4rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
            className="H1_cormorant"
          >
            Our Laurels
          </h1>
          <div className="AwardsWrapContainer">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img style={{ width: "10%", marginRight: "1rem" }} src={award2} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{ margin: "0", color: "rgb(220, 202, 135)" }}
                  className="p_cormorant"
                >
                  Bib Gourmond
                </p>
                <p className="p__opensans">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <img style={{ width: "10%", marginRight: "1rem" }} src={award1} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{ margin: "0", color: "rgb(220, 202, 135)" }}
                  className="p_cormorant"
                >
                  Bib Gourmond
                </p>
                <p className="p__opensans">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img style={{ width: "10%", marginRight: "1rem" }} src={award3} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{ margin: "0", color: "rgb(220, 202, 135)" }}
                  className="p_cormorant"
                >
                  Bib Gourmond
                </p>
                <p className="p__opensans">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img style={{ width: "10%", marginRight: "1rem" }} src={award5} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{ margin: "0", color: "rgb(220, 202, 135)" }}
                  className="p_cormorant"
                >
                  Bib Gourmond
                </p>
                <p className="p__opensans">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="RightContainer">
        <img style={{ width: "100%" }} src={laurels} />
      </div>
    </div>
  );
}
