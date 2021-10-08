import "./styles/app.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./components/pages/Index";
// import SplashModal from "./components/pages/SplashModal";

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/" component={Index} />
        {/* <Route path="/splash" component={SplashModal} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
