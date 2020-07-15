import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import TeamsList from "./teamsList";
import TeamProfile from "./teamProfile";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/detailsview/:slug">
            <TeamProfile />
          </Route>
          <Route path="/">
            <TeamsList />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
