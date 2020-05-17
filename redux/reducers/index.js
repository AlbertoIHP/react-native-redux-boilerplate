import { combineReducers } from 'redux'
import projectState from './project.reducer'
import userState from './user.reducer'

export default combineReducers({
    projectState,
    userState
})