import "../Menu/Menu.css";
import SpoonImage from "../../assets/spoon.png";
import MenuImage from "../../assets/menu.webp";
export default function Menu() {
  return (
    <div id="menu-section" className="MenuMainDv">
      {/* HEADER MENU */}
      <div style={{ marginBottom: "10vh" }} className="HeaderMenu">
        <p
          style={{
            marginBottom: "20px",
            textTransform: "capitalize",
            fontSize: "2rem",
          }}
          className="p_cormorant"
        >
          Menu that fits your palatte
        </p>
        <img style={{ marginBottom: "20px" }} src={SpoonImage} />
        <h1 style={{ width: "100%" }} className="H1_cormorant">
          Today's Special
        </h1>
      </div>
      {/* HEADER MENU */}
      {/* MenuContainer */}
      <div className="MenuContainer">
        <div className="LeftDivMenu">
          <p className="MenuParagraph">Juice</p>
          <div className="MenuData">
            <div className="itemMenu">
              <div className="itemMenuHead">
                <div>
                  <p className="p_cormorant" style={{ color: "#DCCA87" }}>
                    Chapel Hill Shiraz
                  </p>
                </div>
                <div className="itemMenuHeadDash"></div>
                <div className="itemMenuHeadPrice">
                  <p className="p_cormorant">$56</p>
                </div>
              </div>
              <div className="itemMenuBottom">
                <p className="p__opensans">AU | Bottle</p>
              </div>
            </div>
            <div className="itemMenu">
              <div className="itemMenuHead">
                <div>
                  <p className="p_cormorant" style={{ color: "#DCCA87" }}>
                    Chapel Hill Shiraz
                  </p>
                </div>
                <div className="itemMenuHeadDash"></div>
                <div className="itemMenuHeadPrice">
                  <p className="p_cormorant">$56</p>
                </div>
              </div>
              <div className="itemMenuBottom">
                <p className="p__opensans">AU | Bottle</p>
              </div>
            </div>
            <div className="itemMenu">
              <div className="itemMenuHead">
                <div>
                  <p className="p_cormorant" style={{ color: "#DCCA87" }}>
                    Chapel Hill Shiraz
                  </p>
                </div>
                <div className="itemMenuHeadDash"></div>
                <div className="itemMenuHeadPrice">
                  <p className="p_cormorant">$56</p>
                </div>
              </div>
              <div className="itemMenuBottom">
                <p className="p__opensans">AU | Bottle</p>
              </div>
            </div>
            <div className="itemMenu">
              <div className="itemMenuHead">
                <div>
                  <p className="p_cormorant" style={{ color: "#DCCA87" }}>
                    Chapel Hill Shiraz
                  </p>
                </div>
                <div className="itemMenuHeadDash"></div>
                <div className="itemMenuHeadPrice">
                  <p className="p_cormorant">$56</p>
                </div>
              </div>
              <div className="itemMenuBottom">
                <p className="p__opensans">AU | Bottle</p>
              </div>
            </div>
            <div className="itemMenu">
              <div className="itemMenuHead">
                <div>
                  <p className="p_cormorant" style={{ color: "#DCCA87" }}>
                    Chapel Hill Shiraz
                  </p>
                </div>
                <div className="itemMenuHeadDash"></div>
                <div className="itemMenuHeadPrice">
                  <p className="p_cormorant">$56</p>
                </div>
              </div>
              <div className="itemMenuBottom">
                <p className="p__opensans">AU | Bottle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="MiddleDivMenu">
          <img style={{ width: "100%" }} src={MenuImage} />
        </div>
        <div className="RightDivMenu">
          <p className="MenuParagraph">Cocktail</p>
          <div className="MenuData">
            <div className="itemMenu">
              <div className="itemMenuHead">
                <div>
                  <p className="p_cormorant" style={{ color: "#DCCA87" }}>
                    Chapel Hill Shiraz
                  </p>
                </div>
                <div className="itemMenuHeadDash"></div>
                <div className="itemMenuHeadPrice">
                  <p className="p_cormorant">$56</p>
                </div>
              </div>
              <div className="itemMenuBottom">
                <p className="p__opensans">AU | Bottle</p>
              </div>
            </div>
            <div className="itemMenu">
              <div className="itemMenuHead">
                <div>
                  <p className="p_cormorant" style={{ color: "#DCCA87" }}>
                    Chapel Hill Shiraz
                  </p>
                </div>
                <div className="itemMenuHeadDash"></div>
                <div className="itemMenuHeadPrice">
                  <p className="p_cormorant">$56</p>
                </div>
              </div>
              <div className="itemMenuBottom">
                <p className="p__opensans">AU | Bottle</p>
              </div>
            </div>
            <div className="itemMenu">
              <div className="itemMenuHead">
                <div>
                  <p className="p_cormorant" style={{ color: "#DCCA87" }}>
                    Chapel Hill Shiraz
                  </p>
                </div>
                <div className="itemMenuHeadDash"></div>
                <div className="itemMenuHeadPrice">
                  <p className="p_cormorant">$56</p>
                </div>
              </div>
              <div className="itemMenuBottom">
                <p className="p__opensans">AU | Bottle</p>
              </div>
            </div>
            <div className="itemMenu">
              <div className="itemMenuHead">
                <div>
                  <p className="p_cormorant" style={{ color: "#DCCA87" }}>
                    Chapel Hill Shiraz
                  </p>
                </div>
                <div className="itemMenuHeadDash"></div>
                <div className="itemMenuHeadPrice">
                  <p className="p_cormorant">$56</p>
                </div>
              </div>
              <div className="itemMenuBottom">
                <p className="p__opensans">AU | Bottle</p>
              </div>
            </div>
            <div className="itemMenu">
              <div className="itemMenuHead">
                <div>
                  <p className="p_cormorant" style={{ color: "#DCCA87" }}>
                    Chapel Hill Shiraz
                  </p>
                </div>
                <div className="itemMenuHeadDash"></div>
                <div className="itemMenuHeadPrice">
                  <p className="p_cormorant">$56</p>
                </div>
              </div>
              <div className="itemMenuBottom">
                <p className="p__opensans">AU | Bottle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MenuContainer */}
    </div>
  );
}
