import { combineReducers } from 'redux'
import gridReducer from './grid';
import levelReducer from './level'

export default combineReducers({
  grid: gridReducer,
  level: levelReducer,
})
