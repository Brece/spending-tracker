import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTheaterMasks, faWallet, faHome, faUserGraduate, faBus, faDumbbell, faUtensils, faShoppingBag } from '@fortawesome/free-solid-svg-icons'; 

class Bills extends React.Component {
	toggleBillActive = (e) => {
		this.props.handleBillActive(e);
	}

	handleDelete = (e) => {
		this.props.handleBillDelete(e);
	}

	renderBills = (data) => {
		if (data.length > 0) {
			const bills = data.map((bill) => {
				return (
					<li className={`c-bills__container__list__item${ bill.notActive ? ' notActive' : '' }` } key={bill.id}>
						<div className='c-bills__container__list__item__text'>
							<div className='c-bills__container__list__item__text__logo'>
								<FontAwesomeIcon icon={this.findCategory(bill)} />
							</div>
							<p>{bill.company}</p>
						</div>
						<div className='c-bills__container__list__item__action'>
							<div className='c-bills__container__list__item__action__price'>${bill.cost}</div>
							<div className='c-bills__container__list__item__action__buttons'>
								<button type='button' className={`c-btn c-btn--paid${ bill.notActive ? ' notActive' : '' }` } data-id={bill.id} onClick={this.toggleBillActive}>Paid</button>
								<button type='button' className='c-btn c-btn--delete' data-cost={bill.cost} onClick={this.handleDelete}>Delete</button>
							</div>
						</div>
					</li>
				);
		});
		return bills;
		} else {
			return (
				<li className='c-bills__container__list__item'>
					<p>No spendings. Please add one below.</p>
				</li>
			);
		}
	}

	findCategory = (bill) => {
		let icon;

		switch (bill.category) {
			case 'fitness':
				icon = faDumbbell;
				break;
			case 'household':
				icon = faHome;
				break;
			case 'food':
				icon = faUtensils;
				break;
			case 'entertainment':
				icon = faTheaterMasks;
				break;
			case 'education':
				icon = faUserGraduate;
				break;
			case 'transportation':
				icon = faBus;
				break;
			case 'shopping':
				icon = faShoppingBag;
				break;
			default:
				icon = faWallet;
		}
		return icon;
	}

	render() {
		return (
			<section className='o-wrap c-bills'>
				<div className='c-bills__container'>
					<div className='c-bills__container__total'>
						<div className='c-bills__container__total__text'>Total Amount:</div>
						<div className='c-bills__container__total__number'>${this.props.total}</div>
					</div>

					<ul className='c-bills__container__list'>
						{this.renderBills(this.props.bills)}
					</ul>
				</div>
			</section>
		);
	}
}

export default Bills;
