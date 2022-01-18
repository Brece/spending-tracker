import React from 'react';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {}
	}

	render() {
		return (
			<header className='o-wrap c-header'>
				<h1>Spending Tracker</h1>
			</header>
		)
	}
}

export default Header;
