import { connect } from "react-redux";
import PlayersList from "./PlayersList";
import { getTeams } from "../../data/actions/apiActions";
import { changeLoad, setPlayers, setTeams } from "../../data/actions/stateActions";

const mapStateToProps = ({ players }) => ({  players });

const mapDispatchToProps = (dispatch) => ({
		// handleLoad: () => dispatch(setPlayers()),
		handleClick: (teamA, teamB) => dispatch(getTeams(teamA, teamB)),

		// handleLoad: (data) => dispatch(getTeams(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);

// const mapDispatchToProps = (dispatch) => ({
// 	handleLoad : () => dispatch(changeLoad()),
// 	onSubmit: data => dispatch(getExercisePlan(data))
// })