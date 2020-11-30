import MainBar from "./Components/mainbar/mainbar";
import Slider from "./Components/slider/slider";
import FooterBar from "./Components/footer/footer";
import AboutInfo from "./Components/about/about";
import ContactUsForm from "./Components/contactus/contactus";
import Product from "./Components/card/card";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <MainBar />
        <Route exact path="/" render={() => <Slider />} />
        <Route path="/creator" component={AboutInfo} />
        <Route path="/contactus" component={ContactUsForm} />
        <Route path="/shop" component={Product} />
        <FooterBar />
      </div>
    </Router>
  );
}

export default App;
