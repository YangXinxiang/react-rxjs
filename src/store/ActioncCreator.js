import * as ActionType from "./ActionType";
export const increase = (data) => ({
    type: ActionType.INCREASE,
    data
})
export const decrease = (data) =>({
    type: ActionType.DECREASE,
    data
})