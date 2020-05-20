import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HorseList, HorseDetail } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <h2>Welcome to Horse Hub</h2>
          <hr />
          <Switch>
            <Route exact path="/">
              <HorseList />
            </Route>
            <Route path="/horse">
              <HorseDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
