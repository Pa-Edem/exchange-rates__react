import React from 'react';
import './Calc.css';

class Calc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result: '',
		};
	}

	static getDerivedStateFromProps(props, state) {
		return { rate: props.rate };
	}

	calcRate = e => {
		e.preventDefault();
		let sumCurrency = e.target.elements['sum'].value;
		let typeCurrency = e.target.elements['type'].value;
		this.setState({
			result: (sumCurrency / this.state.rate[typeCurrency]).toFixed(2),
		});
	};

	render() {
		return (
			<div className="calc_wrap">
				<h3 className="calc_title">Калькулятор обмена</h3>
				<form onSubmit={this.calcRate}>
					<div className="calc_block top">
						<h4 className="calc_title">Я хочу продать</h4>
						<div className="calc_sum">
							<input
								type="number"
								name="sum"
								defaultValue="12358"
							/>
							<select name="type" className="calc_select">
								{Object.keys(this.props.rate).map(keyName => (
									<option key={keyName} value={keyName}>
										{keyName}
									</option>
								))}
							</select>
							<input
								className="calc_submit"
								type="submit"
								value="Расчитать"
							/>
						</div>
					</div>
				</form>
				<div className="calc_block bottom">
					<h4 className="calc_title">Результат</h4>
					<ul className="calc_res">
						<li>EUR = {this.state.result}</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Calc;
