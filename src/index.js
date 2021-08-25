// react-redux, redux, thunk
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './components/App'
import { rootReducer } from './reducers/rootReducer';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
