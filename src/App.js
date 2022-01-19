import React from 'react';
import uniqid from 'uniqid';
import Bills from './components/Bills';
import AddBill from './components/AddBill';
import Header from './components/Header';
import FloatingMenu from './components/FloatingMenu';
import logo from './img/logo.png'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			bills: [
				{
					company: 'Netflix',
					cost: 13.99,
					logo: logo,
					id: uniqid()
				},
				{
					company: 'Shopify',
					cost: 36.90,
					logo: logo,
					id: uniqid()
				},
				{
					company: 'Amazon',
					cost: 64.99,
					logo: logo,
					id: uniqid()
				},
				{
					company: 'Spotify',
					cost: 9.99,
					logo: logo,
					id: uniqid()
				},
				{
					company: 'YouTube',
					cost: 12.00,
					logo: logo,
					id: uniqid()
				}
			]
		}
	}

	render() {
		return (
			<div className='c-container'>
				<Header />
				<Bills bills={this.state.bills}/>
				<AddBill />
				<div className='c-container__background' />
				<FloatingMenu />
			</div>
		)
	}
}

export default App;
