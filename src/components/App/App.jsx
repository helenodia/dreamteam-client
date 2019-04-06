import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../data/history";
import AddPlayer from "../AddPlayer";
import Teams from "../Teams";
import Loading from "../Loading";
// import PlayersList from "../PlayersList";

const App = ({ submitted }) => (
  <Router history={ history }>
    <React.Fragment>
      <Switch>
        <Loading>
          <Route exact path="/" component={ AddPlayer } />
          <Route exact path="/teams" component={ Teams } />
        </Loading>
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;


       
// { !submitted ? <AddPlayer /> : <Teams /> }
// click dispatch changesubmitted from true to false
// button click handler to move bw apges