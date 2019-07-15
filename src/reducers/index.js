import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer, { initialState } from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer(),
  initialState,
  applyMiddleware(loggerMiddleware),
)

export default store
