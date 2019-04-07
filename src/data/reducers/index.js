import initial from "../initial";

const setInitial = () => initial;

const addPlayer = (state, action) => ({ 
	...state, 
	players: [action.player] 
		// players: [action.data, ...state.players] 

});

const loaded = (state, { teams }) => ({
	...state,
	// set loaded to true:
	loaded: true,
	teams,
});

const setPlayers = (state) => ({ ...state, players: state.players });

const reducer = (state, action) => { 
	switch (action.type) { 
		case "ADD_PLAYER": return addPlayer(state, action); 
		case "LOADED": return loaded(state, action);
		case "RESET": return setInitial();
		case "SET_PLAYERS": return setPlayers(state);
		default: return state;
	}
};

export default reducer;







