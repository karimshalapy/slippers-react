export interface State {
    men: boolean,
    women: boolean,
    gift: boolean,
    discover: boolean,
};

type ActionTypeOptions = ("men" | "women" | "discover" | "gift");

interface Action {
    type: ActionTypeOptions
}

export type Reducer = React.Reducer<State, Action>;

export type ClickHandler = (x: ActionTypeOptions) => void
