import { connect } from "react-redux";
import Players from "./Players";
import { postPlayer } from "../../data/actions/apiActions";
import history from "../../data/history";


const mapStateToProps = (state) => {
	return {
		players: state.players,
		rating: state.rating,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (player) => {
			console.log(player);
			dispatch(postPlayer(player));
			history.push("/");
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);

