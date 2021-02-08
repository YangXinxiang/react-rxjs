import { connect } from "react-redux";
import * as ActioncCreator from "../../store/ActioncCreator";


import CounterView from "./CounterView";
const mapStateToProps = (state, ownProps)=>{
    return {count: state.count}
}
const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        onIncreaseClick : ()=> dispatch(ActioncCreator.increase()),
        onDecreaseClick: ()=> dispatch(ActioncCreator.decrease())
    }
}

const ReduxCounter =  connect(mapStateToProps, mapDispatchToProps)(CounterView);
export default ReduxCounter;