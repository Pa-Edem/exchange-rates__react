import React from 'react';
import './Footer.css';

import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
	constructor(props, nav, addNav) {
		super(props, nav);
		this.nav = nav;
		this.addNav = addNav;
	}
	render() {
		const nav = this.props.nav;
		const addNav = this.props.addNav;
		return (
			<footer>
				<div className="footer">
					<div className="footer_left">
						<p className="footer_copy">
							&copy; 2020 Exchange rates
						</p>
					</div>
					<div className="footer_right">
						<div className="footer_col">
							<ul className="footer_menu">
								{Object.keys(addNav).map(keyName => (
									<li className="footer_item" key={keyName}>
										<NavLink
											className="footer_link"
											to={addNav[keyName]}>
											{keyName}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						<div className="footer_col">
							<ul className="footer_menu">
								{Object.keys(nav).map(keyName => (
									<li className="footer_item" key={keyName}>
										<NavLink
											className="footer_link"
											to={nav[keyName]}>
											{keyName}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
