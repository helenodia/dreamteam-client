import { connect } from "react-redux";
import PlayersList from "./PlayersList";
import { setPlayers } from "../../data/actions/stateActions";

const mapStateToProps = ({ players }) => ({ players });
// 	return {
// 		players: state.players,
// 		// players: addPlayer(state),
// 	};
// };

const mapDispatchToProps = (dispatch) => ({
		handleLoad: () => dispatch(setPlayers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);

// export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
