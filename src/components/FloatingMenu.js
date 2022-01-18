import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPiggyBank, faCogs, faHistory, faPlus } from '@fortawesome/free-solid-svg-icons';

class FloatingMenu extends React.Component {
	constructor() {
		super();
		this.state = {}
	}

	render() {
		return (
			<nav className='c-nav'>
                <div className='c-nav__link c-nav__link--spend'>
                    <div className='c-nav__link__icon'>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </div>
                    <div className='c-nav__link__text'>spend</div>
                </div>
                <div className='c-nav__link c-nav__link--save'>
                    <div className='c-nav__link__icon'>
                        <FontAwesomeIcon icon={faPiggyBank} />
                    </div>
                    <div className='c-nav__link__text'>save</div>
                </div>
                <div className='c-nav__link c-nav__link--history'>
                    <div className='c-nav__link__icon'>
                        <FontAwesomeIcon icon={faHistory} />
                    </div>
                    <div className='c-nav__link__text'>history</div>
                </div>
                <div className='c-nav__link c-nav__link--settings'>
                    <div className='c-nav__link__icon'>
                        <FontAwesomeIcon icon={faCogs} />
                    </div>
                    <div className='c-nav__link__text'>settings</div>
                </div>
                <div className='c-nav__link c-nav__link--add'>
                    <div className='c-nav__link__icon'>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </nav>
		)
	}
}

export default FloatingMenu;
