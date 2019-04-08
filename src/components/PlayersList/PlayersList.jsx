import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class PlayersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: [],
		}
		this.handleLoad = this.handleLoad.bind(this);
	}

	handleLoad(e) {
		e.preventDefault();
		this.props.handleLoad({
			teams: [],
		})
	}

	render() {
		const { players } = this.props;

		return (
			<Fragment>
				<h3 className="h3">PLAYING...</h3>
				<div className="players-list">
					<ul>
						{ players.map((player) => (
							<li key = { player }> { player.name } </li>
						))}
					</ul>
				</div>

				<Link to="/teams">
					<button 
						className="btn-teams"
						onClick={ this.handleLoad }>
						GET TEAMS
					</button>
				</Link>
				<button className="btn-reset">RESET</button>
			</Fragment>
		);
	}
};

export default PlayersList;











	
