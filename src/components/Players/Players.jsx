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
			rating: "1",
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleChange(e) {
		this.setState({ player: e.currentTarget.value });
	}

	handleOptionChange(e) {
		this.setState({
			rating: e.target.value
		});
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
							<h3>ADD PLAYERS:</h3>   
							<form className="container">
								<label className="form-label">
									NAME:
								</label>

								<input 
									className="form-input" 
									onChange={ this.handleChange } 
									value={ this.state.value } 
									type="text" 
								/>
					
							    <div className="radio">
							      <label className="form-label">
							        <input 
							        	type="radio" 
							        	value="1" 
							            checked={this.state.rating === '1'} 
							            onChange={this.handleOptionChange} />
							        "enthusiastic"
							      </label>
							    </div>
							    <div className="radio">
							      <label className="form-label">
							        <input 
							        	type="radio" 
							        	value="2" 
							            checked={this.state.rating === '2'} 
							            onChange={this.handleOptionChange} />
							        not too shabby
							      </label>
							    </div>
							    <div className="radio">
							      <label className="form-label">
							        <input 
							        	type="radio" 
							        	value="3" 
							            checked={this.state.rating === '3'} 
							            onChange={this.handleOptionChange} />
							        too bloody good
							      </label>
							    </div>

								<button 
									type="submit"
									onClick={ this.handleSubmit }
									className="btn-submit container-item-end">
									SUBMIT 
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



