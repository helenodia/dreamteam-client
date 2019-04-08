import axios from "../axios";
import history from "../history";
import { loaded, addPlayer, setTeams } from "./stateActions";

export const getTeams = (data) => (dispatch) => {
	axios.get("teams").then(({data}) => {
		dispatch(loaded(data.data));
		dispatch(setTeams(data.data)); //request.data?
	});
};

export const postPlayer = (player) => (dispatch, getState) => {
	axios.post("players", {
		name: player.name,
		rating:player.rating,
	}).then( response => {
		console.log(response.data)
		dispatch(addPlayer(response.data))
		// getState({ player })
		// history.push("teams")
	}).catch( error => console.log(error))
};

// export const getPlayers = () => (dispatch) => {
// 	axios.get("/").then(({data}) => {
// 		dispatch(setPlayers(data.data));
// 	});
// }


	// axios.get("teams").then(({ data }) => {
