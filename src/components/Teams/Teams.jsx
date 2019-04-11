import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "react-css-grid";
import Header from "../Header";

class Teams extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teamA: this.props.teamA,
			teamB: this.props.teamB,
		}
		// this.handleChange = this.handleChange.bind(this);
	}

	// handleChange(e) {
	// 	this.setState({ teams: e.currentTarget.value });
	// }

	render() {
		const { teamA, teamB } = this.state;

		return (
			<React.Fragment>

					<Grid 
						gap={10}>
						<div className="grid background-teams">
							<div className="header">
								<Link to="/">
									<Header>DREAMTEAM</Header>
								</Link>
							</div>

							<div className="body">
								<h2 className="subheader subheader-a">TEAM A</h2>
								<div className="team-list-a">
									<p>{ teamA }</p>
								</div>

								<button 
									className="btn-shuffle">
									SHUFFLE TEAMS
								</button>
							</div>	

							<div className="sidebar">
								<h2 className="subheader subheader-b">TEAM B</h2>
								<div className="team-list-b">
									<p>{ teamB }</p>
								</div>

								<Link to="/">
									<button 
										className="btn-start-over">
										START OVER
									</button>
								</Link>
							</div>
						</div>	
					</Grid>
			</React.Fragment>
		);
	}
};

export default Teams;


// class Teams extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			teams: [],
// 		}
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(e) {
// 		this.setState({ teams: e.currentTarget.value });
// 	}

// 	render() {
// 		const { teams.teama, teams.teamb } = this.state;

// 		return (
// 			<React.Fragment>
// 					<Grid 
// 						gap={10}>
// 						<div className="grid background-teams">
// 							<div className="header">
// 								<Link to="/">
// 									<Header>DREAMTEAM</Header>
// 								</Link>
// 							</div>

// 							<div className="body">
// 								<h2 className="subheader subheader-a">TEAM A</h2>
// 								<div className="team-list-a">
// 									<p>{teams}</p>
// 								</div>

// 								<button className="btn-shuffle">SHUFFLE TEAMS</button>
// 							</div>	

// 							<div className="sidebar">
// 								<h2 className="subheader subheader-b">TEAM B</h2>
// 								<div className="team-list-b">
// 									<p>{teams}</p>
// 								</div>

// 								<Link to="/">
// 									<button className="btn-start-over">START OVER</button>
// 								</Link>
// 							</div>
// 						</div>	
// 					</Grid>
// 			</React.Fragment>
// 		);
// 	}
// };

// export default Teams;

