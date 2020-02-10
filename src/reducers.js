import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const newVar = '';
const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  // ... // rest of your reducers
  newVar
})
export default createRootReducer