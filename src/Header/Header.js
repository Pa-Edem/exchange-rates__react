import React from 'react';
import './Header.css';

import Ticker from '../Ticker/Ticker';
import Nav from '../Nav/Nav';

class Header extends React.Component {
	constructor(props, nav, rates) {
		super(props, nav, rates);
		this.nav = nav;
		this.rates = rates;
	}
	render() {
		return (
			<header className="header">
				<div className="header_bunner">
					<Ticker rates={this.props.rates} />
				</div>
				<div className="header_main">
					<h1 className="site_title">Exchange rates</h1>
				</div>
				<div className="header_nav">
					<Nav nav={this.props.nav} />
				</div>
			</header>
		);
	}
}

export default Header;
