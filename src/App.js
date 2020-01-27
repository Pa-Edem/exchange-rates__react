import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import Contacts from './Pages/Contacts';
import Points from './Pages/Points';
import NoFound from './Pages/NoFound';
import About from './Pages/About';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			rates: {},
			currencyRate: {},
		};
		this.currency = ['RUB', 'USD', 'GBP', 'JPY'];
		this.getRate();
	}
	getRate = () => {
		fetch('https://api.exchangeratesapi.io/latest')
			.then(data => data.json())
			.then(data => {
				this.setState({
					date: data.date,
					rates: data.rates,
				});
				let result = {};
				this.currency.forEach(i => (result[i] = data.rates[i]));
				this.setState({
					currencyRate: result,
				});
			});
	};
	render() {
		const mainMenu = {
			home: '/',
			points: '/points',
			contacts: '/contacts',
		};
		const addMenu = {
			about: '/about',
			warranty: '/warranty',
			refund: '/refund',
			service: '/service',
		};
		const WrapRate = props => {
			return (
				<Rate
					{...props}
					date={this.state.date}
					currencyRate={this.state.currencyRate}
				/>
			);
		};
		return (
			<div className="app">
				<Header nav={mainMenu} rates={this.state.rates} />
				<Switch>
					<Route path="/" exact component={WrapRate} />
					<Route path="/points" exact component={Points} />
					<Route path="/contacts" exact component={Contacts} />
					<Route path="/about" exact component={About} />
					<Route component={NoFound} />
				</Switch>
				<Footer nav={mainMenu} addNav={addMenu} />
			</div>
		);
	}
}

export default App;
