import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Saved from "./pages/Saved";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path={["/", "/search"]} component={Home} />
        <Route path="/saved" component={Saved} />
      </div>
    </Router>
  )
}

export default App;
