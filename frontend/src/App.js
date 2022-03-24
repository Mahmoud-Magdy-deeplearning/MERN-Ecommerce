import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbary from "./components/Navbar";
import Footer from "./components/footer"

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
 
  return (
    <Router >
      <div className="style">
      <Navbary/>
          <main >
        <Switch>
          <Route className="Home" exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
