import React, { Fragment } from "react";

const Header = ({ 
		header,
		subheader,
}) => (
	<Fragment>
		<h1>{ header }</h1>
		<h2>{ subheader }</h2>
	</Fragment>
);

export default Header;


