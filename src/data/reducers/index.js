import initial from "../initial";

const setInitial = () => initial;

export const addPlayer = (state, action) => ({ 
	// ...state, 
	players: [...state.players, action.player], 
		// players: [action.data, ...state.players] 

});

export const loaded = (state, { teams }) => ({
	...state,
	// set loaded to true:
	loaded: true,
	teams,
});

export const setPlayers = (state) => ({ ...state, players: state.players });

export const setTeams = (state, action) => ({
	teams: [...state.teams, action.data],
})

const reducer = (state, action) => { 
	switch (action.type) { 
		case "ADD_PLAYER": return addPlayer(state, action); 
		case "LOADED": return loaded(state, action);
		case "RESET": return setInitial();
		case "SET_PLAYERS": return setPlayers(state);
		case "SET_TEAMS": return setTeams(state, action);
		default: return state;
	}
};

export default reducer;







