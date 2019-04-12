import axios from "../axios";
import history from "../history";
import { loaded, addPlayer, teamLists, reset } from "./stateActions"

export const postPlayer = (player) => (dispatch, getState) => {
	axios.post("players", {
		name: player.name,
		rating: player.rating,
	}).then( response => {
		dispatch(addPlayer(response.data))
	});
};

export const getTeams = (data) => (dispatch, getState) => {
	axios.get("teams")
	.then( response => {
		dispatch(teamLists(response.data));
		history.push("/teams")
	});
};

export const resetPlayers = (player) => (dispatch, getState) => {
	axios.delete("players").then( response => {
		dispatch(reset(response.data))
		console.log(player)
		history.push("/")
	});
};

export const shuffleTeams = (data) => (dispatch, getState) => {
	axios.get("teams")
	.then( response => {
		dispatch(teamLists(response.data));
		history.push("/teams")
	});
};




