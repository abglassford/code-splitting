import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';

export default class Page1 extends Component {
  static propTypes = {
    onRouteChange: PropTypes.func.isRequired,
    route: PropTypes.string.isRequired,
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
      <h1>Page 1</h1>
      </header>
      <button disabled={this.props.route === 'Page1'} onClick={this.props.onRouteChange('Page1')}>Page1</button>
      <button onClick={this.props.onRouteChange('Page2')}>Page2</button>
      <button onClick={this.props.onRouteChange('Page3')}>Page3</button>
    </div>
    )
  }
}
