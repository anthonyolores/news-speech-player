import './App.css';

import React, { Component } from 'react';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import {faPauseCircle} from '@fortawesome/free-regular-svg-icons';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers/speechconfigreducer'

import SpeechConfigContainer from './containers/speechconfigcontainer';

library.add(
  faPlayCircle,
  faPauseCircle
);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {

    // default State object
    state = {
      articles: [],
      speechConfig:{
        volume: 0.5,
        lang: "en-GB",
        rate: 1,
        pitch:0,
      }
    };

  render() {
    return (
      <Provider store = {store}>
        <SpeechConfigContainer></SpeechConfigContainer>
      </Provider>
    );
  }
}

export default App;
