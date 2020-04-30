import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './App';
import rootReducer from './redux';
//import * as serviceWorker from './serviceWorker';
const store = createStore(rootReducer, applyMiddleware(reduxThunk));
const app = (
	<Provider store={store}>
		<App/>
	</Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
