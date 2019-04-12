import { connect } from "react-redux";
import Teams from "./Teams";
import { getTeams, resetPlayers } from "../../data/actions/apiActions";

const mapStateToProps = ({ teamA, teamB }) => ({ teamA, teamB });

const mapDispatchToProps = (dispatch) => ({
		handleClick: () => dispatch(resetPlayers()),
		// shuffleTeams: () => dispatch(getTeams()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);





