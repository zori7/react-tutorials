import {CREATE_POST, FETCH_POSTS, SET_LOADER} from "./types"

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  }
}

export function setLoader(payload) {
  return {
    type: SET_LOADER,
    payload
  }
}

export function fetchPosts() {
  return async dispatch => {
    dispatch(setLoader(true))
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const json = await response.json()

    dispatch({ type: FETCH_POSTS, payload: json })
    dispatch(setLoader(false))
  }
}
