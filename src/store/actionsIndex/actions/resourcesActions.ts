import * as actionTypes from '../actionNames'
import { ResourcesAction } from '../actionTypes'
import { ResourcesState } from '../../rootReducer/reducersTypes'
import asyncThunkGet from '../../../helpers/asyncThunkGet'


const setResources: (x: ResourcesState) => ResourcesAction = (resources) => ({
    type: actionTypes.SET_RESOURCES,
    resources
})

export const getResources = asyncThunkGet<ResourcesState, ResourcesAction>("resources.json", setResources)