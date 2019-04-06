import React, { Component, Fragment } from "react";
import "./Loading.css";

class Loading extends Component {
	componentDidMount() {
		if (!this.props.loaded) {
			this.props.handleLoad();
		}
	}

	render() {
		const { children, loaded } = this.props;

		return loaded ? children : (
			<Fragment>
				<div className="lds-ripple">
					<div>
						<h3>Loading your teams&hellip;</h3>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Loading;