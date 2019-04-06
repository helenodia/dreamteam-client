export const addPlayer = (data) => {
	return {
		type: "addPlayer",
		data,
	}
};

export const reset = () => {
	return {
		type: "reset",
	};
};

export const loaded = (teams) => {
	return {
		type: "loaded",
		teams,
	};
};


