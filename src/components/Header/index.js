import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = state => {
	return {
		players: state.players,
	};
};

export default connect(mapStateToProps)(Header);