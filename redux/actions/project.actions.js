export const LOAD_PROJECTS = 'LOAD_PROJECTS'
export const SELECT_PROJECT = 'SELECT_PROJECT'

export const projectActions = {
    setProject: (selectedProject) => {
        return {
            type: SELECT_PROJECT,
            payload: selectedProject
        }
    },
    setAllProjects: (allProjects) => {
        return {
            type: LOAD_PROJECTS,
            payload: allProjects
        }
    }
}
