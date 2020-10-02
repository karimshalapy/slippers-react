import React from 'react'

export interface HeaderState {
    men: boolean,
    women: boolean,
    gift: boolean,
    discover: boolean,
};

export type HeaderActionTypeOptions = ("men" | "women" | "discover" | "gift" | "init");

interface Action {
    type: HeaderActionTypeOptions
}

export type HeaderReducer = React.Reducer<HeaderState, Action>;

export type HeaderClickHandler = (x: ActionTypeOptions) => void
