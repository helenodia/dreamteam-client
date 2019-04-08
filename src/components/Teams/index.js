import { connect } from "react-redux";
import Teams from "./Teams";
import { getTeams } from "../../data/actions/apiActions";

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = (dispatch) => ({
		handleLoad: () => dispatch(getTeams),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);

