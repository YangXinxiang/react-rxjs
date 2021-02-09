import { createStore } from "redux";
import createReactiveStore from "./createReactiveStore";
import Reducer from "./Reducer";
const initValue = {
    count:0,
    greeting : "",
}
// const store = createStore(Reducer,initValue);
const store = createReactiveStore(Reducer,initValue); // 换成用RxJS实现的
export default store; 