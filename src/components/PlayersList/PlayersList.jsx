import React, { Component, Fragment } from "react";
// import Players from "../Players";

class PlayersList extends Component {


	render() {
		const { players } = this.props;
		// const { players } = this.state;

		return (
			<Fragment>
				<h3 className="h3">Playing...</h3>
				<ul>
					{ players.map((player) => (
						<li key = { player }> { player.name } </li>
					))}
				</ul>
				<button className="btn-reset">Clear players</button>
			</Fragment>
		);
	}
};

export default PlayersList;











	
