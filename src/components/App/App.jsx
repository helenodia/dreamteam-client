import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import main from "../../styles/main.css";
import history from "../../data/history";
import Players from "../Players";
import Teams from "../Teams";
import FourOhFour from "../FourOhFour";
import Loading from "../Loading";

const App = ({ submitted }) => (
  <Router history={ history }>
    <React.Fragment>
    <Loading>
      <Switch>
          <Route exact path="/" component={ Players } />
          <Route exact path="/teams" component={ Teams } />
          <Route component={ FourOhFour } />
      </Switch>
      </Loading>
    </React.Fragment>
  </Router>
);

export default App;





