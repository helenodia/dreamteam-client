import { connect } from "react-redux";
import Teams from "./Teams";
import { getTeams } from "../../data/actions/apiActions";

const mapStateToProps = ({ teamA, teamB }) => ({ teamA, teamB });

export default connect(mapStateToProps, null)(Teams);





