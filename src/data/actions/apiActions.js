import axios from "../../axios";
// import history from "../history";
import { loaded } from "./stateActions";

export const getTeams = () => (dispatch) => {
	axios.get("/").then(({ data }) => {
		dispatch(loaded(data.data));
	});
};

export const postPlayer = (player) => (dispatch) => {
	axios.put("/", {
		player
	}).then(({ data }) => {
		dispatch(player(data.data.player));
	});
};