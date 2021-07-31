import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './src/Router';
import store from './src/store/store';

export default class App extends Component {
  render() {
    return <Provider store={store()}><Router /></Provider>
  }
}