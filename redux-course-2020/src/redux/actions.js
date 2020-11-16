import {CHANGE_THEME, DECREMENT, INCREMENT} from "./actionTypes"

export function increment() {
  return {
    type: INCREMENT
  }
}

export function asyncIncrement() {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(increment())
    }, 2000)
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}
