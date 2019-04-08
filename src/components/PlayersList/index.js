import { connect } from "react-redux";
import PlayersList from "./PlayersList";
import { setPlayers } from "../../data/actions/stateActions";

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = (dispatch) => ({
		handleLoad: () => dispatch(setPlayers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);

