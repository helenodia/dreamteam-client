import initial from "../initial";

const setInitial = () => initial;

const addPlayer = (state, action) => ({ 
	...state, 
	players: [state.players, ...state.players] 
		// players: [action.data, ...state.players] 

});

const loaded = (state, { teams }) => ({
	...state,
	// set loaded to true:
	loaded: true,
	teams,
});

const reducer = (state, action) => { 
	switch (action.type) { 
		case "addPlayer": return addPlayer(state, action); 
		case "loaded": return loaded(state, action);
		case "reset": return setInitial();
		default: return state;
	}
};

export default reducer;







