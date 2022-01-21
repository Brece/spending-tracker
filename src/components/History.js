import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTheaterMasks, faWallet, faHome, faUserGraduate, faBus, faDumbbell, faUtensils, faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'; 

class History extends React.Component {
    renderHistory = (data) => {
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
						</div>
					</li>
				);
		});
		return bills;
		} else {
			return (
				<li className='c-bills__container__list__item'>
					<p>No spending history.</p>
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

    toggleActive = (e) => {
        this.props.handlePopupActive(e);
    }

    render() {
        return (
            <section className={`c-history${this.props.active ? ' active' : ''}`}>
                <div className='o-wrap c-history__container'>
                    <h2>History</h2>
                    <ul className='c-bills__container__list'>
                        {this.renderHistory(this.props.history)}
                    </ul>
                    <div className='c-addBill__container__closeBtn' data-section='historyActive' onClick={this.toggleActive}>
						<FontAwesomeIcon icon={faTimes} />
					</div>
                </div>
            </section>
        );
    }
}

export default History;
