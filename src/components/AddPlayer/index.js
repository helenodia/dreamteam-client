import { connect } from "react-redux";
import AddPlayer from "./AddPlayer";
import { postPlayer } from "../../data/actions/apiActions";
import history from "../../data/history";

// import Buttons from "./Buttons";

const mapStateToProps = ({ player }) => ({ player });
// 	return {
// 		players: state.players,
// 		// players: addPlayer(state),
// 	};
// };



const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (player) => {
			dispatch(postPlayer(player));
			history.push("/");
		},
	};
};
		// handleSubmit: (player) => dispatch(addPlayer(player));

		// addPlayer: (player) => dispatch(addPlayer(player)),
		// handleReset: () => dispatch(reset()),
		// handleIncrement: () => dispatch({ type: "change", amount: 1 }),
// });

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);

// export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
