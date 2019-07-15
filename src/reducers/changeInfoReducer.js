import {
  CHANGE_INFO,
  DECREMENT_INFO,
  INCREMENT_INFO,
} from '../actions/constants'

export const initialState = {
  info: 0,
}

const interfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INFO:
      return {
        ...state,
        info: action.payload,
      }
    case DECREMENT_INFO:
      return {
        ...state,
        info: state.info - 1,
      }
    case INCREMENT_INFO:
      return {
        ...state,
        info: state.info + 1,
      }
    default:
      return state
  }
}

export default interfaceReducer
