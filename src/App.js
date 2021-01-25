import MainBar from "./Components/mainbar/mainbar";
import homePage from "./pages/homepage/index";
import FooterBar from "./Components/footer/footer";
import AboutInfo from "./Components/about/about";
import ContactUsForm from "./Components/contactus/contactus";
import shopPage from "./pages/shop/index";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <MainBar />
        <Route exact path="/" component={homePage} />
        <Route path="/creator" component={AboutInfo} />
        <Route path="/contactus" component={ContactUsForm} />
        <Route path="/shop" component={shopPage} />
        <FooterBar />
      </div>
    </Router>
  );
}

export default App;
