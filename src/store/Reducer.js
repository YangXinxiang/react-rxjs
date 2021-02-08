import * as ActionType from "./ActionType";
const reducer = (state, action)=>{
    switch(action.type){
        case ActionType.INCREASE:
            return {...state, count:state.count+1};
        case ActionType.DECREASE:
            return {...state, count:state.count+-1};
        default:
            console.log(`[reducer] error, no support action type, type = ${action.type}`);
            return state;
    }
}
export default reducer;