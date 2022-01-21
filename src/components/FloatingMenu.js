import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faHistory, faPlus } from '@fortawesome/free-solid-svg-icons';

class FloatingMenu extends React.Component {
    toggleActive = (e) => {
        this.props.handlePopupActive(e);
    }

	render() {
		return (
			<nav className='c-nav'>
                <div className='c-nav__link' data-section='historyActive' onClick={this.toggleActive}>
                    <div className='c-nav__link__icon'>
                        <FontAwesomeIcon icon={faHistory} />
                    </div>
                    <div className='c-nav__link__text'>history</div>
                </div>
                <div className='c-nav__link' data-section='settingsActive' onClick={this.toggleActive}>
                    <div className='c-nav__link__icon'>
                        <FontAwesomeIcon icon={faCogs} />
                    </div>
                    <div className='c-nav__link__text'>settings</div>
                </div>
                <div className='c-nav__link c-nav__link--add' data-section='addBillActive' onClick={this.toggleActive}>
                    <div className='c-nav__link__icon'>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </nav>
		)
	}
}

export default FloatingMenu;
