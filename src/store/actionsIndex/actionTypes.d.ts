import { ResourcesState } from "../rootReducer/reducersTypes";
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

export interface ResourcesAction {
    type: actionTypes.SET_RESOURCES,
    resources: ResourcesState
}
//Thunk action type
export type AppThunk<State> = () => ThunkAction<void, State, unknown, Action<string>>