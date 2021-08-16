import './App.css';
import Navbar from './navbar/navbar.js';
import LoginPage from './pages/login.js'
import HelpPage from './pages/helppage.js';
import LandingPage from './pages/landingpage.js';
import HomePage from './pages/homepage.js';
import SearchPage from './pages/searchpage.js'
import SignUpPage from './pages/sign_up.js'
import ProfileGeneralPage from './pages/profile_general.js'
import ProfilePasswordsPage from './pages/profile_passwords.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { mainRoutes } from './const';
// library fontawesome icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";

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
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/help">
              <HelpPage />
            </Route>
            <Route path="/signup">
              <div></div>
              <SignUpPage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
