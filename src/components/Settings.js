import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Settings extends React.Component {
    toggleActive = (e) => {
        this.props.handlePopupActive(e);
    }

    render() {
        return (
            <section className={`c-settings${this.props.active ? ' active' : ''}`}>
                <div className='o-wrap c-settings__container'>
                    <h2>Settings</h2>
                    <button type='button' onClick={() => this.props.clearLocalStorage('bills')}>Delete all Spendings</button>
                    <button type='button' onClick={() => this.props.clearLocalStorage('history')}>Clear Spending History</button>
                    <div className='c-settings__container__closeBtn' data-section='settingsActive' onClick={this.toggleActive}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Settings;
