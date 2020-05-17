/* eslint-disable no-case-declarations */
import { LOAD_PROJECTS, SELECT_PROJECT } from '../actions/project.actions'

/**
 * Reducer function means a switch case to filter action data on the platform for general state
 * @param {*} state Real time updated through all components state (general state flux)
 * @param {*} action Action is an object with structyure { type: STRING, payload: FUNCTION }
 */
function projectReducer (state = { allProjects: [], projectSelected: null }, action) {
    switch (action.type) {
    case SELECT_PROJECT:
        return {
            ...state,
            projectSelected: action.payload
        }
    case LOAD_PROJECTS:
        return {
            ...state,
            allProjects: action.payload
        }
    default:
        return state
    }
}

export default projectReducer
