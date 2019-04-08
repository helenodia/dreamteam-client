import { connect } from "react-redux";
import Loading from "./Loading";
import { getTeams } from "../../data/actions/apiActions";

const mapStateToProps = ({ loaded }) => ({
	loaded,
});

const mapDispatchToProps = (dispatch) => ({
	handleLoad: () => dispatch(getTeams()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading);