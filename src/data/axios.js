import axios from "axios";

export default axios.create({
	baseURL: "http://ec2-35-178-26-8.eu-west-2.compute.amazonaws.com/api/",
	// baseURL: "http://homestead.test/api/",

	headers: {
		Accept: "application/json",
	},	
});