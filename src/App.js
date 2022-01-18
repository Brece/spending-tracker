import React from 'react';
import Bills from './components/Bills';
import Header from './components/Header';
import FloatingMenu from './components/FloatingMenu';

class App extends React.Component {
	constructor() {
		super();
		this.state = {}
	}

	render() {
		return (
			<div className='c-container'>
				<Header />
				<Bills />
				<FloatingMenu />
			</div>
		)
	}
}

export default App;
