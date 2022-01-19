import React from 'react';
import uniqid from 'uniqid';

class AddBill extends React.Component {
	constructor() {
		super();
		this.state = {
			bill: {
				company: '',
				cost: '',
				logo: '',
				id: uniqid()
			}
		}
	}

	// TODO: change state object 
	handleSubmit = (e) => {
		e.preventDefault();
	}

	handleChange = (e) => {
	// TODO: change state object for company, cost, logo, id
		this.setState({ value: e.target.value });
	}

	render() {
		return (
			<section className='c-addBill'>
				<div className='o-wrap c-addBill__container'>
					<h2>Add Spending</h2>
					<form onSubmit={this.handleSubmit}>
						<div className='c-addBill__container__group'>
							<label htmlFor='company_name'>Company Name</label>
							<input type='text' id='company_name' name='company_name' onChange={this.handleChange} value={this.state.bill.company} />
						</div>
						<div className='c-addBill__container__group'>
							<label htmlFor='cost'>Cost</label>
							<input type='text' id='cost' name='cost' onChange={this.handleChange} value={this.state.bill.cost} />
						</div>
						<button type='submit'>Save</button>
					</form>
				</div>
			</section>
		);
	}
}

export default AddBill;
