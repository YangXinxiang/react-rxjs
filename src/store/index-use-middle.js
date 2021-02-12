import React from "react";
import { createStore, applyMiddleware} from "redux";
import { createEpicMiddleware, combineEpics} from "redux-observable";
import ReduxThunk from "redux-thunk";
import epic from "./epic";
import fetchEpic from "./fetchEpic";
import Reducer from "./Reducer";
const inintValue = {
    count:0,
    user:{}
}
const epicMiddleware = createEpicMiddleware();
const store = createStore(
    Reducer,
    inintValue,
    applyMiddleware(epicMiddleware, ReduxThunk)
)
const rootEpic = combineEpics(epic, fetchEpic);
epicMiddleware.run(rootEpic);
export default store