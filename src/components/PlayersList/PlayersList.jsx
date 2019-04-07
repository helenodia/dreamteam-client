import React, { Component, Fragment } from "react";
import Players from "../Players";

class PlayersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: [],
		}
}

	render() {
		const { players } = this.props;
		// const { players } = this.state;

		return (
			<Fragment>
				<h2>Playing...</h2>
					<ul>
						{ players.map((player) => (
							<li key = { player }> { player } </li>
						))}
					</ul>
			</Fragment>
		);
	}
};

export default PlayersList;











	
