import { createStore } from "redux";
import Reducer from "./Reducer";
const initValue = {
    count:0
}
const store = createStore(Reducer,initValue);
export default store; 