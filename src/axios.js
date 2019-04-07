import axios from "axios";

export default axios.create({
	// baseURL: "http://ec2-35-178-26-8.eu-west-2.compute.amazonaws.com/api/players",
		baseURL: "http://homestead.test/api/players",

	// params: {
	// 	key: "",
	// },
	headers: {
		Accept: "application/json",
	},	
});