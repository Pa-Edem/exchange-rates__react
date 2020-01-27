import React from 'react';
import './Ticker.css';

class Ticker extends React.Component {
	constructor(props, rates) {
		super(props);
		this.rates = rates;
	}

	render() {
		const quotes = this.props.rates;
		let str = '';
		Object.keys(quotes).map(
			keyName => (str += `${keyName}: ${quotes[keyName]}, `)
		);
		return (
			<div className="ticker-wrap">
				<div className="ticker-back"></div>
				<span className="ticker-item">{str}</span>
			</div>
		);
	}
}

export default Ticker;
