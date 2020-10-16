import { SlippersData } from "../../../pages/Slippers/SlippersTypes";
import { AppThunk, FilteredAction } from "../actionTypes";
import * as actions from '../actionNames'
import { ResourcesState } from "../../rootReducer/reducersTypes";
import Axios from "axios";

const setProducts: (x: SlippersData) => FilteredAction = (products) => ({
    type: actions.SET_PRODCUTS,
    products
})

export const getProdcuts: AppThunk<ResourcesState> = () => {

    return (dispatch) => {
        Axios.get<SlippersData>("https://slippers-react.firebaseio.com/slippers.json")
            .then(res => {
                dispatch(setProducts(res.data))
            })
            .catch(err => { throw new Error(err) })
    }
} 