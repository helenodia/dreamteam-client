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
		this.handleClick = this.handleClick.bind(this);
		// this.shuffleTeams = this.shuffleTeams.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.handleClick();
	}

	// shuffleTeams(e) {
	// e.preventDefault();
	// this.props.shuffleTeams();
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
							    	<Header 
							    		header="DREAMTEAM"
							    		subheader="TEAMS"
							    	 />								</Link>
							</div>


							<div className="body">
							<h1>TEAMS</h1>
								<h2 className="subheader subheader-a">TEAM A</h2>
								<div className="team-list-a">
									<ul>
										{ teamA.map((team, i) => (
										<li key = { i }> { team.name } </li>
										))}
									</ul>
								</div>

								<Link to="/">
									<button 
										className="btn-start-over">
										ADD MORE PLAYERS									
									</button>
								</Link>

							</div>	

							<div className="sidebar">
								<h2 className="subheader subheader-b">TEAM B</h2>
								<div className="team-list-b">
									<ul>
										{ teamB.map((team, i) => (
										<li key = { i }> { team.name } </li>
										))}
									</ul>
								</div>

								<Link to="/">
									<button 
										className="btn-start-over"
										onClick={ this.handleClick }>
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


								// <Link to="/teams">

								// <button 
								// 	className="btn-shuffle"
								// 	onClick={ this.shuffleTeams }>
								// 	SHUFFLE TEAMS
								// </button>
								// </Link>