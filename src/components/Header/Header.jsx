import React, { Fragment } from "react";

const Header = ({ 
		header,
		subheader,
}) => (
	<Fragment>
		<h1>{ header }</h1>
		<h3>{ subheader }</h3>
	</Fragment>
);

export default Header;


