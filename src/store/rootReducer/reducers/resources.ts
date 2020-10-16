import *  as actionTypes from '../../actionsIndex/actionNames'
import { ResourcesState } from '../reducersTypes'
import { ResourcesAction } from '../../actionsIndex/actionTypes'


const initialState: ResourcesState = {}

export default (state = initialState, action: ResourcesAction) => {

    switch (action.type) {

        case actionTypes.SET_RESOURCES:
            return { ...action.resources }
        default:
            return state

    }
}