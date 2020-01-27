import React from 'react';
import './Nav.css';

import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
	constructor(props, nav) {
		super(props, nav);
		this.nav = nav;
	}
	render() {
		const nav = this.props.nav;
		return (
			<nav>
				<ul className="nav">
					{Object.keys(nav).map(keyName => (
						<li className="nav_item" key={keyName}>
							<NavLink className="nav_link" to={nav[keyName]}>
								{keyName}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		);
	}
}

export default Nav;
