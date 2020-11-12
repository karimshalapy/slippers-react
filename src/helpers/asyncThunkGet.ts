import { Action } from 'redux'
import { AppThunk } from '../@types/actionTypes'
import { database } from '../Firebase'

export const asyncThunkGet = <T, Y extends Action<string>>(path: string, dispatchFunc: (x: T) => Y) => {
    const asyncFunction: AppThunk<T> = () => {
        return (dispatch) => {
            database.ref(path).once("value")
                .then(snapshot => {
                    const value = snapshot.val() as T
                    dispatch(dispatchFunc(value))
                })
                .catch(err => { throw new Error(err) })
        }
    }
    return asyncFunction
}
export default asyncThunkGet