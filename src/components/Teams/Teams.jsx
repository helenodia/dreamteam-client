import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "react-css-grid";
import Loading from "../Loading";

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
			<Grid gap={10}>
			<Loading>
				<h1>Teams</h1>
					<Link to="/">
						<h2>A Team</h2>

						<h2>B Team</h2>
						<button>Shuffle teams</button>
						<button>Start over</button>
					</Link>
				</Loading>
				</Grid>
			</React.Fragment>
		);
	}
};

export default Teams;
