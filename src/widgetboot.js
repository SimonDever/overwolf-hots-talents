import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
/*import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as Reducers from './reducers';
import './sass/index.scss';*/
import './sass/widget-index.scss';
import './sass/talent-pictures.scss';
import Widget from './components/Widget';

/*const reducers = combineReducers(Reducers);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
);*/

ReactDOM.render(
  /*<Provider store={ store }>
    <App />
  </Provider>,*/
  <Widget />,
  document.getElementById('root')
);
