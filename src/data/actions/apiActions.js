import axios from "../axios";
import history from "../history";
// import { loaded, addPlayer, setTeams } from "../reducers";
import { loaded, addPlayer, setTeams, setPlayers } from "./stateActions"

export const getTeams = (teams) => (dispatch) => {
	axios.get("teams", {
		teamA: teams.teamA,
		teamB: teams.teamB,
	}).then( response => {
console.log(teams)
	// .then(({teams}) => {
		// dispatch(loaded(data.data));
		dispatch(setPlayers(response.data)); 
		history.push("/teams")
	});
};

export const postPlayer = (player) => (dispatch, getState) => {
	axios.post("players", {
		name: player.name,
		rating: player.rating,
	}).then( response => {
		console.log(response.data)
		dispatch(addPlayer(response.data))
	}).catch( error => console.log(error))
};


