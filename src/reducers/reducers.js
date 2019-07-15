import { combineReducers } from 'redux'
// more reducers would go here
import changeInfoReducer from './changeInfoReducer'

export const initialState = {}

const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = () =>
  combineReducers({
    baseReducer,
    info: changeInfoReducer,
  })

export default rootReducer
