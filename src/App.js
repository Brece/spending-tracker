import React from 'react';
import AllBills from './components/AllBills';
import Header from './components/Header';

class App extends React.Component {
	constructor() {
			super();
			this.state = {}
	}

	render() {
			return (
					<div className='c-container'>
							<Header />
							<AllBills />
					</div>
			)
	}
}

export default App;
