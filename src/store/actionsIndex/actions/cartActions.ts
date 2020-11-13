import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppThunk, CartActions } from '../../../@types/actionTypes'
import { CartButtonDatasetType, CartItemsInterface } from '../../../@types/CartTypes'
import { RootReducer } from '../../../@types/reducersTypes'
import { Gender, SlippersProductData } from '../../../@types/SlippersTypes'
import { database } from '../../../Firebase'
import asyncThunkGet from '../../../helpers/asyncThunkGet'
import * as actions from '../actionNames'

const asyncThunkPutRequest = (dispatch: ThunkDispatch<RootReducer, unknown, Action<string>>, uid: string, itemToBeSent: CartItemsInterface, fallbackItemsOnError?: CartItemsInterface) => {
    database.ref(`/cart/${uid}`).set(itemToBeSent)
        .then(() => {
            dispatch(setCartState(false, "loading"))
            dispatch(setCartState(true, "success"))
        })
        .catch(() => {
            dispatch(setCartState(false, "loading"))
            dispatch(setCartState(true, "error"))
            if (fallbackItemsOnError) dispatch(setCartDataLocally(fallbackItemsOnError))
        })
}
export const setCartState = (state: boolean, stateType: "loading" | "success" | "error"): CartActions => ({
    type: stateType === "loading" ? actions.SET_CART_LOADING : stateType === "error" ? actions.SET_CART_ERROR : actions.SET_CART_SUCCESS,
    [stateType]: state
})
export const resetCartState = () => ({ type: actions.RESET_CART_LOADING_STATE })

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
            dispatch(resetCartState())
            dispatch(setCartState(true, "loading"))
            asyncThunkPutRequest(dispatch, uid, getState().cartData.cartItems)
        }
    }
    return async()
}
export const cartButtonsActionsLocally = (itemId: string, cartButtonType: CartButtonDatasetType): CartActions => {
    let actionType: actions.INCREMENT_CART | actions.DECREMENT_CART | actions.REMOVE_ITEM_CART;
    if (cartButtonType === "increment") actionType = actions.INCREMENT_CART
    else if (cartButtonType === "decrement") actionType = actions.DECREMENT_CART
    else actionType = actions.REMOVE_ITEM_CART
    return {
        type: actionType,
        itemId
    }
}
export const cartButtonsActionsRemotely = (itemId: string, cartButtonType: CartButtonDatasetType, uid: string) => {
    const async: AppThunk<RootReducer> = () => {
        return (dispatch, getState) => {
            const oldCartItems = getState().cartData.cartItems
            dispatch(cartButtonsActionsLocally(itemId, cartButtonType))
            dispatch(resetCartState())
            dispatch(setCartState(true, "loading"))
            asyncThunkPutRequest(dispatch, uid, getState().cartData.cartItems, oldCartItems)
        }
    }
    return async()
}
export const setCartDataLocally = (cartItems: CartItemsInterface): CartActions => ({
    type: actions.SET_CART_DATA,
    cartItems
})
export const setCartDataRemotely = (cartItems: CartItemsInterface, uid: string) => {
    const async: AppThunk<RootReducer> = () => {
        return (dispatch) => {
            dispatch(setCartDataLocally(cartItems))
            dispatch(resetCartState())
            dispatch(setCartState(true, "loading"))
            asyncThunkPutRequest(dispatch, uid, cartItems)
        }
    }
    return async()
}
export const getCartData = (uid: string) => asyncThunkGet<CartItemsInterface, CartActions>(`/cart/${uid}`, setCartDataLocally)()