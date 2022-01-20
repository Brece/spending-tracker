import React from 'react';
import uniqid from 'uniqid';

class AddBill extends React.Component {
	constructor() {
		super();
		this.state = {
			company: '',
			cost: '',
			category: '',
			notActive: false
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();

		// TODO: handle valid input (no emty value and number for cost)
		let newBill = Object.assign({}, this.state, { id: uniqid() })
		this.props.handleFormSubmit(newBill);
		this.props.handleFormActive();
		this.setState({ company: '', cost: '', category: '' });
	}

	handleChange = (e) => {
	// TODO: change state object for company, cost, logo, id
	const name = e.target.name;
	const value = e.target.type === 'ckeckbox'
		? e.target.ckecked
		: e.target.value;

		this.setState({ [name]: value });
	}

	render() {
		return (
			<section className={`c-addBill${this.props.active ? ' active' : ''}`}>
				<div className='o-wrap c-addBill__container'>
					<h2>Add Spending</h2>
					<form onSubmit={this.handleSubmit}>
						<div className='c-addBill__container__group'>
							<label htmlFor='company'>Company Name</label>
							<input type='text' id='company' name='company' required value={this.state.company} onChange={this.handleChange} />
						</div>
						<div className='c-addBill__container__group'>
							<label htmlFor='cost'>Cost</label>
							<input type='text' id='cost' name='cost' placeholder='0.00' required value={this.state.cost} onChange={this.handleChange} />
						</div>
						<div className='c-addBill__container__group'>
							<label htmlFor='category'>Category</label>
							<select name='category' id='category' required value={this.state.category} onChange={this.handleChange}>
								<option value='bills'>Bills</option>
								<option value='household'>Household</option>
								<option value='food'>Food & Drinks</option>
								<option value='entertainment'>Entertainment</option>
								<option value='education'>Education</option>
								<option value='transportation'>Transportation</option>
								<option value='shopping'>Shopping</option>
								<option value='fitness'>Fitness</option>
							</select>
						</div>
						<button type='submit'>Save</button>
					</form>
				</div>
			</section>
		);
	}
}

export default AddBill;
