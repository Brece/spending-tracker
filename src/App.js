import React from 'react';
import Bills from './components/Bills';
import AddBill from './components/AddBill';
import Header from './components/Header';
import FloatingMenu from './components/FloatingMenu';
import History from './components/History';
import Settings from './components/Settings';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			addBillActive: false,
			historyActive: false,
			settingsActive: false,
			bills: localStorage.length !== 0 ? JSON.parse(localStorage.getItem('bills')) : [],
			history: localStorage.length !== 0 ? JSON.parse(localStorage.getItem('history')) : []
		}
	}

	handlePopupActive = (e) => {
		const activeState = e.currentTarget.dataset.section;

		switch (activeState) {
			case 'addBillActive':
				this.setState({
					addBillActive: !this.state.addBillActive,
					historyActive: false,
					settingsActive: false
				});
				break;
			case 'historyActive':
				this.setState({
					addBillActive: false,
					historyActive: !this.state.historyActive,
					settingsActive: false
				});
				break;
			default:
				this.setState({
					addBillActive: false,
					historyActive: false,
					settingsActive: !this.state.settingsActive
				});
		}
	}

	handleFormSubmit = (newBill) => {
		this.setState(
			{ bills: [...this.state.bills, newBill] },
			() => this.updateLocalStorage()
		);
	}

	calculateTotal = () => {
		let total = 0;
		this.state.bills.map( (bill) => total += Number(bill.cost) );
		return total;
	}

	handleBillActive = (e) => {
		const id = e.target.dataset.id;
		const newBillsArray = this.state.bills.map((bill) => {
			if (bill.id === id) {
				bill = Object.assign({}, bill, {notActive: !bill.notActive});
				// bill = {...bill, notActive: !bill.notActive}
			}
			return bill;
		});
		this.setState(
			{ bills: newBillsArray },
			() => this.updateLocalStorage()
		);
	}

	handleBillDelete = (e) => {
		const cost = e.target.dataset.cost;
		let deletedBill;
		const newBillsArray = this.state.bills.filter((bill) => {
			if (bill.cost === cost) {
				deletedBill = bill;
			}
			return bill.cost !== cost;
		});

		this.setState({
			bills: newBillsArray,
			history: [...this.state.history, deletedBill]
		},
			() => this.updateLocalStorage()
		);
	}

	updateLocalStorage = () => {
		localStorage.setItem('bills', JSON.stringify(this.state.bills));
		localStorage.setItem('history', JSON.stringify(this.state.history));
	}

	clearLocalStorage = (key) => {
		this.setState({
			[key]: []
		},
			() => this.updateLocalStorage()
		);
	}

	render() {
		return (
			<div className='c-container'>
				<Header />
				<Bills total={this.calculateTotal()} bills={this.state.bills} handleBillActive={this.handleBillActive} handleBillDelete={this.handleBillDelete}/>
				<AddBill active={this.state.addBillActive} handleFormSubmit={this.handleFormSubmit} handlePopupActive={this.handlePopupActive} />
				<History active={this.state.historyActive} history={this.state.history} handleBillDelete={this.handleBillDelete} handlePopupActive={this.handlePopupActive}/>
				<Settings active={this.state.settingsActive} clearLocalStorage={this.clearLocalStorage} handlePopupActive={this.handlePopupActive} />
				<div className='c-container__background' />
				<FloatingMenu handlePopupActive={this.handlePopupActive} />
			</div>
		)
	}
}

export default App;
