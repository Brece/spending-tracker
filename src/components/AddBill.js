import React from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 

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
		// Valid values are numbers with max two decimals
		const regexp = /^\d+(\.\d{1,2})?$/;

		if (regexp.test(this.state.cost)) {
			let newBill = Object.assign({}, this.state, { id: uniqid() })
			this.props.handleFormSubmit(newBill);
			this.props.handlePopupActive(e);
			this.setState({ company: '', cost: '', category: '' });
		}
		return;
	}

	handleChange = (e) => {
	const name = e.target.name;
	const value = e.target.type === 'ckeckbox'
		? e.target.ckecked
		: e.target.value;

		this.setState({ [name]: value });
	}

	toggleActive = (e) => {
        this.props.handlePopupActive(e);
    }

	render() {
		return (
			<section className={`c-addBill${this.props.active ? ' active' : ''}`}>
				<div className='o-wrap c-addBill__container'>
					<h2>Add Spending</h2>
					<form data-section='addBillActive' onSubmit={this.handleSubmit}>
						<div className='c-addBill__container__group'>
							<label htmlFor='company'>Company Name</label>
							<input type='text' id='company' name='company' required value={this.state.company} onChange={this.handleChange} />
						</div>
						<div className='c-addBill__container__group'>
							<label htmlFor='cost'>Cost</label>
							<input type='text' id='cost' name='cost' placeholder='0.00' required value={this.state.cost} onChange={this.handleChange} />
							<small>* Expected format: Number from type of 1 or 1.00</small>
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
						<button type='submit' data-section='addBillActive'>Save</button>
					</form>
					<div className='c-addBill__container__closeBtn' data-section='addBillActive' onClick={this.toggleActive}>
						<FontAwesomeIcon icon={faTimes} />
					</div>
				</div>
			</section>
		);
	}
}

export default AddBill;
