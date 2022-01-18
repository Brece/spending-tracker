import React from 'react';
import logo from '../img/logo.png'

class Bills extends React.Component {
	constructor() {
		super();
		this.state = {}
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
						<li className='c-bills__container__list__item'>
							<div className='c-bills__container__list__item__logo'>
								<img src={logo} alt='Company logo' />
								<p>Netflix</p>
							</div>
							<div className='c-bills__container__list__item__price'>- $18.99</div>
						</li>
						<li className='c-bills__container__list__item'>
							<div className='c-bills__container__list__item__logo'>
								<img src={logo} alt='Company logo' />
								<p>Netflix</p>
							</div>
							<div className='c-bills__container__list__item__price'>- $18.99</div>
						</li>
						<li className='c-bills__container__list__item'>
							<div className='c-bills__container__list__item__logo'>
								<img src={logo} alt='Company logo' />
								<p>Netflix</p>
							</div>
							<div className='c-bills__container__list__item__price'>- $18.99</div>
						</li>
						<li className='c-bills__container__list__item'>
							<div className='c-bills__container__list__item__logo'>
								<img src={logo} alt='Company logo' />
								<p>Netflix</p>
							</div>
							<div className='c-bills__container__list__item__price'>- $18.99</div>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}

export default Bills;
