import React from 'react';
import './Rate.css';

import Calc from '../Calc/Calc';

class Rate extends React.Component {
	constructor(props, date, currencyRate) {
		super(props, date, currencyRate);
		this.date = date;
		this.currencyRate = currencyRate;
	}
	render() {
		return (
			<main className="rate">
				<div className="flex_wrap">
					<h3 className="cur_title">
						Курс валют на {this.props.date}
					</h3>
					<div className="cur_wrap">
						{Object.keys(this.props.currencyRate).map(keyName => (
							<div className="cur_block" key={keyName}>
								<div className="cur_name">{keyName}</div>
								<div className="cur_in">
									{this.props.currencyRate[keyName].toFixed(
										2
									)}
								</div>
								<div className="cur_out">за 1 EUR</div>
							</div>
						))}
					</div>
					<Calc rate={this.props.currencyRate} />
				</div>
			</main>
		);
	}
}

export default Rate;
