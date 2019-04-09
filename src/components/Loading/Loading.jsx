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

		return (
			<Fragment>
				<div className="lds-facebook">
					<div></div><div></div><div></div>
					<div>
						<h3>LOADING...&hellip;</h3>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Loading;