import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../../styles/main.css";
import history from "../../data/history";
import Players from "../Players";
import Teams from "../Teams";
import FourOhFour from "../FourOhFour";
import Loading from "../Loading";

const App = ({ submitted }) => (
  <Router basename={process.env.PUBLIC_URL} history={ history }>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={ Players } />
        <Route exact path="/teams" component={ Teams } />
        <Route component={ Players } />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;







