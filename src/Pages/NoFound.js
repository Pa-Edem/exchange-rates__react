import React, { Component } from 'react';
import './NoFound.css';

import { NavLink } from 'react-router-dom';

class NoFound extends Component {
	render() {
		const style = {
			position: 'absolute',
			padding: '0',
			margin: '0',
			left: '0',
			top: '0',
			width: '100vw',
			height: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'white',
		};
		return (
			<div style={style}>
				<div className="nofound_wrap">
					<div className="nofound_num">404</div>
					<h2 className="nofound_title">Page not found</h2>
					<div className="nofound_btn">
						<NavLink className="nofound_link" to="/">
							Go Home page
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default NoFound;
