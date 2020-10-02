import * as actionTypes from '../actionNames'
import { ResourcesAction, AppThunk } from '../actionTypes'
import { ResourcesState } from '../../rootReducer/reducersTypes'
import axios from 'axios'


const setResources: (x: ResourcesState) => ResourcesAction = (resources) => ({
    type: actionTypes.SET_RESOURCES,
    resources
})

export const getResources: AppThunk<ResourcesState> = () => {

    return (dispatch) => {
        axios.get<ResourcesState>("https://slippers-react.firebaseio.com/resources.json")
            .then(res => dispatch(setResources(res.data)))
            .catch(err => { throw new Error(err) })
    }
} 