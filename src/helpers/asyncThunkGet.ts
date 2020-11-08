import Axios from 'axios'
import { Action } from 'redux'
import { AppThunk } from '../@types/actionTypes'

export const asyncThunkGet = <T, Y extends Action<string>>(path: string, dispatchFunc: (x: T) => Y) => {
    const asyncFunction: AppThunk<T> = () => {
        return (dispatch) => {
            Axios.get<T>("https://slippers-react.firebaseio.com/" + path)
                .then(res => dispatch(dispatchFunc(res.data)))
                .catch(err => { throw new Error(err) })
        }
    }
    return asyncFunction
}
export default asyncThunkGet