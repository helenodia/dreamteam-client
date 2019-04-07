import React, { Component } from "react";
import Header from "../Header";
import PlayersList from "../PlayersList";

class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "",
			players: [],
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ player: e.currentTarget.value, rating: e.currentTarget.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.handleSubmit({ 
			name: this.state.player,
			rating: 2
		});
	}

	render() {

		return (
			<React.Fragment>
			        <Header>dreamteam</Header>
				<form onSubmit={ this.handleSubmit }>
					<label>
						Enter player's name:
						<input 
							onChange={ this.handleChange } 
							value={ this.state.value } 
							type="text" 
						/>
					</label>
					<label>
						Enter player's experience:
						<input 
							onChange={ this.handleChange } 
							value={ this.state.value } 
							type="text" 
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
				<PlayersList />
				<button>clear players</button>
			</React.Fragment>
		);
	}
};

export default Players;



