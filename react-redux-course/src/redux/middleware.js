import {CREATE_POST} from "./types"

const forbidden = ['duck', 'spam', 'cake']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.some(w => action.payload.title.includes(w))

        if (found) {
          return
        }
      }

      return next(action)
    }
  }
}