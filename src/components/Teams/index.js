import { connect } from "react-redux";
import Teams from "./Teams";
import { getTeams } from "../../data/actions/apiActions";

const mapStateToProps = ({ players }) => ({ players });
// 	return {
// 		players: state.players,
// 		// players: addPlayer(state),
// 	};
// };

const mapDispatchToProps = (dispatch) => ({
		handleLoad: () => dispatch(getTeams),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);

// export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
