import axios from "../../axios";
import history from "../history";
import { loaded, addPlayer } from "./stateActions";

export const getTeams = () => (dispatch) => {
	axios.get("/").then(({ data }) => {
		dispatch(loaded(data.data));
	});
};

export const postPlayer = (player) => (dispatch, getState) => {
	axios.post("/", {
		name: player.name,
		rating:player.rating,
	}).then( response => {
		console.log(response.data)
		dispatch(addPlayer(response.data))
		// getState({ player })
		history.push("/")
	}).catch( error => console.log(error))
};

// export const getPlayers = () => (dispatch) => {
// 	axios.get("/").then(({data}) => {
// 		dispatch(setPlayers(data.data));
// 	});
// }
