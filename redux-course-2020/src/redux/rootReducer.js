import {CHANGE_THEME, DECREMENT, INCREMENT} from "./actionTypes"
import {combineReducers} from "redux"

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  }

  return state
}

const initialThemeValue = {
  value: 'light'
}

function themeReducer(state = initialThemeValue, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
})
