import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {applyMiddleware, compose, createStore} from "redux"
import thunk from "redux-thunk"
import {Provider} from 'react-redux'
import {rootReducer} from "./redux/rootReducer"
import {forbiddenWordsMiddleware} from "./redux/middleware"

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        forbiddenWordsMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()