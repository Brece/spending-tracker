import React from 'react';
import Bills from './components/Bills';
import AddBill from './components/AddBill';
import Header from './components/Header';
import FloatingMenu from './components/FloatingMenu';
// import logo from './img/logo.png'

/*
 let bills = [
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
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			addBillActive: false,
			bills: localStorage.length !== 0 ? JSON.parse(localStorage.getItem('bills')) : []
		}
	}

	handleFormActive = () => {
		this.setState({ addBillActive: !this.state.addBillActive })
	}

	handleFormSubmit = (newBill) => {
		this.setState(
			{ bills: [...this.state.bills, newBill] },
			() => {
				localStorage.setItem('bills', JSON.stringify(this.state.bills));
			}
		);
	}

	calculateTotal = () => {
		let total = 0;
		this.state.bills.map( (bill) => total += Number(bill.cost) );
		return total;
	}

	render() {
		return (
			<div className='c-container'>
				<Header />
				<Bills total={this.calculateTotal()} bills={this.state.bills}/>
				<AddBill active={this.state.addBillActive} handleFormSubmit={this.handleFormSubmit} handleFormActive={this.handleFormActive}/>
				<div className='c-container__background' />
				<FloatingMenu handleFormActive={this.handleFormActive} />
			</div>
		)
	}
}

export default App;
