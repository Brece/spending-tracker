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
			addBillActive: false,
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

	handleFormActive = () => {
		this.setState({ addBillActive: !this.state.addBillActive })
	}

	render() {
		return (
			<div className='c-container'>
				<Header />
				<Bills bills={this.state.bills}/>
				<AddBill active={this.state.addBillActive}/>
				<div className='c-container__background' />
				<FloatingMenu handleFormActive={this.handleFormActive} />
			</div>
		)
	}
}

export default App;
