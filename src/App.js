import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";

function App() {
  //const marvelApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d88ae9c796545d66b47080b6c7201870&hash=b500a04b3538d43798e6a0c5d527791a')
  //console.log(marvelApi);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/inicio" exact component={() => <Home />} />
          <Route path="/series" exact component={() => <Series />} />
          <Route path="/comics" exact component={() => <Comics />} />
          <Route component={() => <Error404 />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
