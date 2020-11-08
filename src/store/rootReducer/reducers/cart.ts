import { CartActions } from "../../../@types/actionTypes"
import { CartState } from "../../../@types/reducersTypes"
import { Gender, SlippersProductData } from "../../../@types/SlippersTypes"
import * as actions from '../../actionsIndex/actionNames'

const createCartItemId = (item: SlippersProductData, gender: Gender, size: number) => `${item.collection}_${item.upperColorShortened}_${item.soleColorShortened}_${gender}_${size}`

const initalState: CartState = {
    cartItems: {},
    cartLoading: false,
    cartError: false
}

export default (state = initalState, action: CartActions): CartState => {
    switch (true) {
        case !!(action.type === actions.SET_CART_DATA && action.cartItems):
            return {
                ...state,
                cartItems: action.cartItems !== null
                    ? {
                        ...action.cartItems
                    } : {}
            }
        case !!(action.type === actions.ADD_TO_CART && action.itemToBeAdded && action.gender && action.size):
            const productId = createCartItemId(action.itemToBeAdded!, action.gender!, action.size!)
            return {
                ...state,
                cartItems: {
                    ...state.cartItems,
                    [productId]: {
                        productData: action.itemToBeAdded!,
                        amount: state.cartItems[productId] ? state.cartItems[productId].amount + 1 : 1,
                        gender: action.gender!,
                        size: action.size!
                    }
                }
            }
        case !!(action.type === actions.SET_CART_LOADING):
            return {
                ...state,
                cartLoading: !!action.loading
            }
        case !!(action.type === actions.SET_CART_ERROR):
            return {
                ...state,
                cartError: !!action.error
            }
        default:
            return state
    }
}
