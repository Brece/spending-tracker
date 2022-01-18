import React from 'react';

class Header extends React.Component {
	constructor() {
			super();
			this.state = {}
	}

	render() {
			return (
					<header className='c-header'>
							<h1>Bills App</h1>
					</header>
			)
	}
}

export default Header;
