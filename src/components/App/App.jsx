import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import main from "../../styles/main.css";
import history from "../../data/history";
import Players from "../Players";
import Teams from "../Teams";
import FourOhFour from "../FourOhFour";

const App = ({ submitted }) => (
  <Router history={ history }>
    <React.Fragment>
      <Switch>
          <Route exact path="/" component={ Players } />
          <Route component={ FourOhFour } />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;


// check loading comp - - won't work w switch? 
// { !submitted ? <Players /> : <Teams /> }
// click dispatch changesubmitted from true to false
// button click handler to move bw pages


          // <Route exact path="/teams" component={ Teams } />
