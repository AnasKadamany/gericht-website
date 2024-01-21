import "./App.css";
import ResponsiveAppBar from "./Components/Navbar/ResponsiveAppBar";
import Headers from "./Components/Header/Header.js";
import Details from "./Components/Detaills/Details.js";
import Menu from "./Components/Menu/Menu.js";
import Chef from "./Components/ChefWorld/Chef.js";
import Video from "./Components/Video/Video.js";
import Awards from "./Components/Awards/Awards.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div style={{ color: "white" }} className="App ">
      <ResponsiveAppBar />
      <Headers />
      <Details />
      <Menu />
      <Chef />
      <Video />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
