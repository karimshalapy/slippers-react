import { combineReducers } from 'redux'
import filter from './reducers/filter'
import filtered from './reducers/filtered'
import resources from './reducers/resources'
import { RootReducer } from '../../@types/reducersTypes'
import cart from './reducers/cart'

//combining all the reducers into one reducer
export const rootReducer = combineReducers<RootReducer>({
    mainResources: resources,
    filterState: filter,
    productsData: filtered,
    cartData: cart,
})