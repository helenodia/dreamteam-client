import axios from "../axios";
import history from "../history";
// import { loaded, addPlayer, setTeams } from "../reducers";
import { loaded, addPlayer, setTeams, setPlayers, teamLists } from "./stateActions"

export const postPlayer = (player) => (dispatch, getState) => {
	axios.post("players", {
		name: player.name,
		rating: player.rating,
	}).then( response => {
		console.log(response.data)
		dispatch(addPlayer(response.data))
	}).catch( error => console.log(error))
};

export const getTeams = (data) => (dispatch, getState) => {
	axios.get("teams")
	.then( response => {
		console.log(response.data)
		dispatch(teamLists(response.data));
		history.push("/teams")
	});
};



