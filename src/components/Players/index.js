import { connect } from "react-redux";
import Players from "./Players";
import { postPlayer } from "../../data/actions/apiActions";

const mapStateToProps = (state) => {
	return {
		players: state.players,
		rating: state.rating,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (player) => {
			dispatch(postPlayer(player));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);

