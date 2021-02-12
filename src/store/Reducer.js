import * as ActionType from "./ActionType";
const reducer = (state, action)=>{
    console.log(`[reducer] enter,action.type = ${action.type}, state(before change) = ${JSON.stringify(state)}, action = ${JSON.stringify(action)}`);
    switch(action.type){
        case ActionType.INCREASE:
            return {...state, count:state.count+1};
        case ActionType.ASYNC_INCREASE:
            return {...state, count:state.count+1};
        case ActionType.DECREASE:
            return {...state, count:state.count+-1};
        case ActionType.FETCHED_USER:
            return {...state, user:action.user};
        default:
            console.log(`[reducer] error, no support action type, type = ${action.type}`);
            return state;
    }
}
export default reducer;