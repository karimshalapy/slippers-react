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
        case action.type:
            if (action.type === "gift" ||
                action.type === "men" ||
                action.type === "women" ||
                action.type === "discover") {

                return {
                    ...initialState,
                    [action.type]: !state[action.type]
                }
            } else throw new Error("Wrong action type");

        default:
            throw new Error("Wrong action type")
    }
};

