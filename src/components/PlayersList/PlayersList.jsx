import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// import Players from "../Players";

class PlayersList extends Component {


	render() {
		const { players } = this.props;
		// const { players } = this.state;

		return (
			<Fragment>
				<h3 className="h3">PLAYING...</h3>
				<ul>
					{ players.map((player) => (
						<li key = { player }> { player.name } </li>
					))}
				</ul>


				<Link to="/teams">
					<button className="btn-teams">GET TEAMS</button>
				</Link>
				<button className="btn-reset">RESET</button>
			</Fragment>
		);
	}
};

export default PlayersList;











	
