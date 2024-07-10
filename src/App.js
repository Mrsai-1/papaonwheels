import "./App.css";

import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { Navbar } from "./navbar";
import About from "./About";
import Contact from "./contact";
import AllProducts from "./AllProducts";
// import Animate from "./images/Animation.mp4"
// import backgroundImage from "./images/backgroundWaterMark.png"

function App() {
  return (
    <div className="App container-fluid">
      {/* <video autoPlay loop muted id="bgvid">
  <source src={Animate} type="video/mp4"/>
  Your browser does not support the video tag.
</video> */}

      <Navbar />
      {/* <Marquee/> */}
      <Routes className="all-components">
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/introduction" element={<AllProducts />} />
      </Routes>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
