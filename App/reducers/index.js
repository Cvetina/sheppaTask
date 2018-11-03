import { combineReducers } from 'redux'
import lawyers from './lawyersReducer'
import ui from './uiReducers'

const rootReducer = combineReducers({  
lawyers: lawyers,
ui: ui
})

export default rootReducer;