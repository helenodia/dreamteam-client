import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ( {submitted} ) => ( {submitted} );

export default connect(mapStateToProps)(App);