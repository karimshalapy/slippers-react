import Axios from 'axios'
import { AppThunk, CartActions } from '../../../@types/actionTypes'
import { CartItems } from '../../../@types/CartTypes'
import { RootReducer } from '../../../@types/reducersTypes'
import { Gender, SlippersProductData } from '../../../@types/SlippersTypes'
import asyncThunkGet from '../../../helpers/asyncThunkGet'
import * as actions from '../actionNames'

export const setCartLoadingState = (loadingState: boolean): CartActions => ({
    type: actions.SET_CART_LOADING,
    loading: loadingState
})
export const setCartErrorState = (errorState: boolean): CartActions => ({
    type: actions.SET_CART_ERROR,
    error: errorState
})
export const addToCartLocally = (itemToBeAdded: SlippersProductData, gender: Gender, size: number): CartActions => ({
    type: actions.ADD_TO_CART,
    itemToBeAdded,
    gender,
    size
})
export const addToCartRemotely = (itemToBeAdded: SlippersProductData, gender: Gender, size: number, uid: string) => {
    const async: AppThunk<RootReducer> = () => {
        return (dispatch, getState) => {
            dispatch(addToCartLocally(itemToBeAdded, gender, size))
            dispatch(setCartLoadingState(true))
            Axios.put<CartItems>(`https://slippers-react.firebaseio.com/cart/${uid}.json`, getState().cartData)
                .then(() => dispatch(setCartLoadingState(false)))
                .catch(() => {
                    dispatch(setCartLoadingState(false))
                    dispatch(setCartErrorState(true))
                })
        }
    }
    return async()
}

export const setCartData = (cartItems: CartItems): CartActions => ({
    type: actions.SET_CART_DATA,
    cartItems
})

export const getCartData = (uid: string) => asyncThunkGet<CartItems, CartActions>(`cart/${uid}.json`, setCartData)()