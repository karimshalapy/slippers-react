import *  as actionTypes from '../../actionsIndex/actionNames'
import { ResourcesState } from '../reducersTypes'
import { ResourcesAction } from '../../actionsIndex/actionTypes'


const initialState: ResourcesState = {
    galleryData: undefined,
    press: undefined,
    insta: undefined,
    footerNav: undefined,
    socialNav: undefined,
}

export default (state = initialState, action: ResourcesAction) => {

    switch (action.type) {

        case actionTypes.SET_RESOURCES:
            console.log(action.resources)
            return { ...action.resources }
        default:
            return state

    }
}