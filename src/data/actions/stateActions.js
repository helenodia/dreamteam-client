export const addPlayer = (player) => {
	return {
		type: "ADD_PLAYER",
		player,
	}
};

export const reset = () => {
	return {
		type: "RESET",
	};
};

export const loaded = (teams) => {
	return {
		type: "LOADED",
		teams,
	};
};

export const setPlayers = (players) => {
	return {
		type: "SET_PLAYERS",
		players,
	};
};

export const setTeams = (teams) => {
	return {
		type: "SET_TEAMS",
		teams,
	};
};
