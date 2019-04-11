import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class PlayersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: [],
			teamA: [],
			teamB: [],
		}
		this.handleLoad = this.handleLoad.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleLoad(e) {
		e.preventDefault();
		this.props.handleLoad({
			players: [],
		});
	}

	handleClick(e) {
		e.preventDefault();
		this.props.handleClick({
		});
	}

	render() {
		const { players } = this.props;

		return (
			<Fragment>
				<h3 className="h3">PLAYING...</h3>
				<div className="players-list">
					<ul>
						{ players.map((player, i) => (
							<li key = { i }> { player.data.name } </li>
						))}
					</ul>
				</div>

				<Link to="/teams">
					<button
						className="btn-teams"
						onClick={ this.handleClick }>
						GET TEAMS
					</button>
				</Link>
				<button className="btn-reset">RESET</button>
			</Fragment>
		);
	}
};

export default PlayersList;











	
