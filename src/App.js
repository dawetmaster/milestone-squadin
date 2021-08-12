import './App.css';
import Navbar from './components/navbar.js';
import LoginPage from './login and sign up page/login.js'
import HelpPage from './pages/helppage.js';
import LandingPage from './pages/landingpage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { mainRoutes } from './const';
// library fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div className="content-container">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/help">
              <HelpPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
