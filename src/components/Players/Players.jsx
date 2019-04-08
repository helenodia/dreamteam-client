import React, { Component } from "react";
import Header from "../Header";
import PlayersList from "../PlayersList";
import Grid from "react-css-grid";


class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "",
			players: [],
			rating: "",
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleRating = this.handleRating.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ player: e.currentTarget.value });
	}

	handleRating(e) {
		this.setState({ rating: e.currentTarget.value });
	}

	handleSubmit(e, state, players) {
		e.preventDefault();
		this.props.handleSubmit({ 
			name: this.state.player,
			rating: this.state.rating,
		});
		// this.setState({ ...state.player, players: this.state.player})
	}

	render() {

		return (
			<React.Fragment>
				<Grid gap={10}>
					<div className="grid background">
						<div className="header background">
						    <Header className="header">dreamteam</Header>
						</div>

						<div className="body background"> 
							<h3>Add your players:</h3>   
							<form className="container">
								<label className="form-label">
									Name:
									<input 
										className="form-input" 
										onChange={ this.handleChange } 
										value={ this.state.value } 
										type="text" 
									/>
								</label>
								<label className="form-label">
									Experience(1-3):
									<input 
										className="form-input"
										onChange={ this.handleRating } 
										value={ this.state.value } 
										type="text" 
									/>
								</label>
								<button 
									onClick={ this.handleSubmit }
									className="btn-submit container-item-end">
									Submit 
								</button>
							</form>
						</div>

						<div className="sidebar background">
							<PlayersList />
						</div>	
					</div>
				</Grid>	
			</React.Fragment>
		);
	}
};

export default Players;



