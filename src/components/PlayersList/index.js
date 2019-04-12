import { connect } from "react-redux";
import PlayersList from "./PlayersList";
import { getTeams } from "../../data/actions/apiActions";

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = (dispatch) => ({
		handleClick: () => dispatch(getTeams()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);



