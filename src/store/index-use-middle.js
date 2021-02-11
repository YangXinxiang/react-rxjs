import React from "react";
import { createStore, applyMiddleware} from "redux";
import { createEpicMiddleware} from "redux-observable";
import ReduxThunk from "redux-thunk";
import epic from "./epic";
import Reducer from "./Reducer";
const inintValue = {
    count:0,
}
const epicMiddleware = createEpicMiddleware();
const store = createStore(
    Reducer,
    inintValue,
    applyMiddleware(epicMiddleware, ReduxThunk)
)
epicMiddleware.run(epic);
export default store