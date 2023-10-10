import React from 'react';
import "../Styles/Footer.css"

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <footer className='footer'>
                <h2 className='footer_content'>Hello</h2>
            </footer>
        );
    }
}

export default Footer