import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "react-css-grid";
import Loading from "../Loading";
import Header from "../Header";

class Teams extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: [],
		}
		this.handleChange = this.handleChange.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ teams: e.currentTarget.value });
	}

	render() {
		const { teams } = this.state;

		return (
			<React.Fragment>
				<Loading>
					<Grid 
						gap={10}>
							<div className="grid background-teams">

							<Link to="/">
								<Header className="header">DREAMTEAM</Header>
							</Link>

							<div className="body">
								<h2 className="subheader subheader-a">TEAM A</h2>
								<p>{teams}</p>
								<button className="btn-shuffle">SHUFFLE TEAMS</button>
							</div>	

							<div className="sidebar">
								<h2 className="subheader subheader-b">TEAM B</h2>
								<Link to="/">
									<button className="btn-start-over">START OVER</button>
								</Link>
							</div>
						</div>	
					</Grid>
				</Loading>
			</React.Fragment>
		);
	}
};

export default Teams;

