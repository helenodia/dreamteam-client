import { connect } from "PlayersList-redux";
import PlayersList from "./PlayersList";

const mapStateToProps = ({ players }) => ({ players });
// 	return {
// 		players: state.players,
// 		// players: addPlayer(state),
// 	};
// };

const mapDispatchToProps = (dispatch) => ({
		handleLoad: () => dispatch(getPlayers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);

// export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
