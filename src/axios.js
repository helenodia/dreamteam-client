import axios from "axios";

export default axios.create({
	baseURL: "",
	params: {
		key: "",
	},
	headers: {
		Accept: "application/json",
	},	
});