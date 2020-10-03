import { HeaderState, HeaderReducer } from './HeaderTypes'

//reducer definition
export const initialState: HeaderState = {
    men: false,
    women: false,
    gift: false,
    discover: false,
};


export const reducer: HeaderReducer = (state, action) => {
    switch (action.type) {
        case "init":
            return initialState
        case "gift":
        case "men":
        case "women":
        case "discover":
            return {
                ...initialState,
                [action.type]: !state[action.type]
            }
        default:
            throw new Error("Wrong action type")
    }
};

