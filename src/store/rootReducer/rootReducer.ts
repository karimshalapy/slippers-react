import { combineReducers } from 'redux'
import filter from './reducers/filter'
import resources from './reducers/resources'
import { RootReducer } from './reducersTypes'

//combining all the reducers into one reducer
export const rootReducer = combineReducers<RootReducer>({
    mainResources: resources,
    filterState: filter
})