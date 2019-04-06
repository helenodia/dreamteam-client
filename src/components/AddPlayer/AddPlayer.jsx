import React, { Component } from "react";
import Header from "../Header";

// import PlayersList from "./PlayersList";

class AddPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "",
			players: [],
		}
		this.handleChange = this.handleChange.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ player: e.currentTarget.value });
	}

	render() {
		const { players } = this.state;

		return (
			<React.Fragment>
			        <Header>dreamteam</Header>

				<form onSubmit={ () => this.props.handleSubmit(this.state) }>
					<label>
						Enter player's name:
						<input 
							onChange={ this.handleChange } 
							value={ this.state.value } 
							type="text" 
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
				<h2>Playing...</h2>
					<ul>
						{ players.map((player) => (
							<li key = { player }> { player } </li>
						))}
					</ul>
			</React.Fragment>
		);
	}
};

export default AddPlayer;



