import React, { Component } from 'react';
import {Counter} from './modal';

const style = {
  margin: '20px'
};

class App extends Component {
  render() {
    return (
      <div style={style}>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
      </div>
    );
  }
}

export default App;

