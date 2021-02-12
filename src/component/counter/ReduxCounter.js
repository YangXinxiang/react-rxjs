import { connect } from "react-redux";
import * as ActioncCreator from "../../store/ActioncCreator";


import CounterView from "./CounterView";
const mapStateToProps = (state, ownProps)=>{
    return {count: state.count,
        user:state.user
    }
}
const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        onIncreaseClick : ()=> {
            console.log(`[ReduxCounter] onIncreaseClick :: enter~~~~~`);
            return dispatch(ActioncCreator.increase())
        },
        onDecreaseClick: ()=> dispatch(ActioncCreator.decrease()),
        onAsyncIncreaseClick : ()=> dispatch(ActioncCreator.asyncIncrease),
        onFetchUserClick :()=>dispatch(ActioncCreator.fetch_user()),
    }
}

const ReduxCounter =  connect(mapStateToProps, mapDispatchToProps)(CounterView);
export default ReduxCounter;