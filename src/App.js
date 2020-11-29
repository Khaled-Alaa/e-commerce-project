import MainBar from "./Components/mainbar/mainbar";
/*import Slider from "./Components/Slider";
import Card from "./Components/card";
import Form from "./Components/form";
import FooterBar from "./Components/footer";*/
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <MainBar />
        {/*}<Route exact path="/" render={() => <Slider />} />
        <Route path="/shop" component={Card} />
        <Route path="/contactus" component={Form} />
  <FooterBar />{*/}
      </div>
    </Router>
  );
}

export default App;
