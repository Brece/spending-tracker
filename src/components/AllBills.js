import React from 'react';

class AllBills extends React.Component {
	constructor() {
			super();
			this.state = {}
	}

	render() {
			return (
					<div className='c-bills'>
							<div className='c-bills__container'>
									<div className='c-bills__container__total'>
											<div className='c-bills__container__total__text'>Total Amount:</div>
											<div className='c-bills__container__total__number'>$999.99</div>
									</div>
							</div>
					</div>
			)
	}
}

export default AllBills;
