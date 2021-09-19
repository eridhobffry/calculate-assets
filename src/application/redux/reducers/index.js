import { combineReducers } from "redux";
import { RadiosReducer } from "./assets";

const reducers = combineReducers({
    radios: RadiosReducer,
})

const appReducer = (state, action) => {
    return reducers(state, action)
}

export default appReducer