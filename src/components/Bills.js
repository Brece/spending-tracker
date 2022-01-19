import React from 'react';

class Bills extends React.Component {
	renderBills = (data) => {
		const bills = data.map((bill) => {
			return (
				<li className='c-bills__container__list__item' key={bill.id}>
					<div className='c-bills__container__list__item__logo'>
						<img src={bill.logo} alt='Company logo' />
						<p>{bill.company}</p>
					</div>
					<div className='c-bills__container__list__item__price'>- ${bill.cost}</div>
				</li>
			)
		});
		return bills;
	}

	render() {
		return (
			<section className='o-wrap c-bills'>
				<div className='c-bills__container'>
					<div className='c-bills__container__total'>
						<div className='c-bills__container__total__text'>Total Amount:</div>
						<div className='c-bills__container__total__number'>$999.99</div>
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
