import React from 'react';
import "../Styles/NoResult.css"

class NoResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="noResult">
            <h1 className='noResult_content'>
                No result
            </h1>
        </div>
    );
  }
}

export default NoResult