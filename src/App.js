import MainBar from "./Components/mainbar/mainbar";
import Slider from "./Components/slider/slider";
import FooterBar from "./Components/footer/footer";
import AboutInfo from "./Components/about/about";
/*import Card from "./Components/card";
import Form from "./Components/form";*/
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
        {/*}<Route path="/shop" component={Card} />
        <Route path="/contactus" component={Form} />{*/}
        <FooterBar />
      </div>
    </Router>
  );
}

export default App;
