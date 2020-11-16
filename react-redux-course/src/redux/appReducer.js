import {SET_LOADER} from "./types"

const initialState = {
  loading: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}