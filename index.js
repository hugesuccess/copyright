import React, { Component } from 'react';
import './copyright.css'

class Copyright extends Component {
  render() {
    return(
      <div className="row copyright">
        <div className="col-xs-12 text-right">
          <p>Copyright {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    )
  }
}

export default Copyright;
