import React, { Component, Fragment } from "react";

class Loading extends Component {
	componentDidMount() {
		if (!this.props.loaded) {
			this.props.handleLoad();
		}
	}

	render() {
		const { children, loaded } = this.props;

		return loaded ? ( children ) :
		(
			<Fragment className="loading">
				<h3>LOADING...&hellip;</h3>
			</Fragment>
		);
	}
}

export default Loading;