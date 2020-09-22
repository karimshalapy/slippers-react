import { State, Reducer } from './HeaderTypes'

//reducer definition
export const initialState: State = {
    men: false,
    women: false,
    gift: false,
    discover: false,
};


export const reducer: Reducer = (state, action) => {
    switch (!!action.type) {
        case true:
            return {
                ...initialState,
                [action.type]: !state[action.type]
            }
        default:
            throw new Error("Wrong action type")
    }
};

