import './styles.css'
import {applyMiddleware, createStore, compose} from 'redux'
import thunk from "redux-thunk"
import {rootReducer} from "./redux/rootReducer"
import {asyncIncrement, changeTheme, decrement, increment} from "./redux/actions"

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

function logger(state) {
  return function(next) {
    return function(action) {
      console.log('PrevState: ', state.getState())
      console.log('Action: ', action)

      const newState = next(action)
      console.log('NewState: ', newState)
      return newState
    }
  }
}

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
  const state = store.getState()
  const newTheme = state.theme.value.includes('light') ? 'dark' : 'light'

  store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
  const state = store.getState()

  counter.textContent = state.counter
  document.body.className = state.theme.value
})

store.dispatch({ type: 'INIT_APPLICATION' })
