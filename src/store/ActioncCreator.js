import * as ActionType from "./ActionType";
export const increase = (data) => ({
    type: ActionType.INCREASE,
    data
})
export const decrease = (data) =>({
    type: ActionType.DECREASE,
    data
})

export const asyncIncrease = (dispatch) => {
    console.log(`[ActionCreator] asyncIncrease :: enter.`)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`[ActionCreator] asyncIncrease :: will resolve.`)
            const newData = {
                type: ActionType.ASYNC_INCREASE,
                //data
            }
            dispatch(newData);
            resolve(newData);
        }, 1000)
    })
}

export const fetch_user = (data) =>({
    type: ActionType.FETCH_USER,
    data
})
export const fetched_user = (data) =>({
    type: ActionType.FETCHED_USER,
    data
})