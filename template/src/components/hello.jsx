import React, { Component } from 'react';
import { observer } from 'mobx-react';


@observer
export default class Test extends Component {
    render() {
      return (
        <div className="App">
          <p>Hi there~~</p>
          <img src="static/image/white.png"/>
        </div>
      );
    }
  }
