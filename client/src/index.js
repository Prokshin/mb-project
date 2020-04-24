import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga'
import {createStore,compose, applyMiddleware} from "redux";
import {
    BrowserRouter as Router
} from "react-router-dom";
import {rootReducer} from "./redux/reducers/rootReducer";
import saga from "./redux/saga";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

sagaMiddleware.run(saga)

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

