import React, { Component } from "react";
import { Link } from "react-router-dom";
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
		// this.setState({ player: e.currentTarget.value });
	}



	render() {
		const { teams } = this.state;

		return (
			<React.Fragment>
			<Loading>
				<h1>Teams</h1>
					<Link to="/">
						<button>start over</button>
					</Link>
				</Loading>
			</React.Fragment>
		);
	}
};

export default Teams;
