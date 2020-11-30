import MainBar from "./Components/mainbar/mainbar";
import Slider from "./Components/slider/slider";
import FooterBar from "./Components/footer/footer";
/*import Card from "./Components/card";*/
import ContactUsForm from "./Components/contactus/contactus";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <MainBar />
        <Route exact path="/" render={() => <Slider />} />
        {/*}<Route path="/shop" component={Card} />{*/}
        <Route path="/contactus" component={ContactUsForm} />
        <FooterBar />
      </div>
    </Router>
  );
}

export default App;
