import { combineReducers } from 'redux'
import resources from './reducers/resources'

//combining all the reducers into one reducer
export const rootReducer = combineReducers({
    mainResources: resources
})