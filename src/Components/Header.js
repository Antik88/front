import React from 'react';
import "../Styles/Header.css"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className='header'>
                <div className="headerContainer">
                    <h5 className='headerContent'>FilmFearcher</h5>
                    <input type="text" />
                </div>
            </header>
        );
    }
}

export default Header 