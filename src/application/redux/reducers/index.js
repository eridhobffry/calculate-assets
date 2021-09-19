import { combineReducers } from "redux";
import { AssetsReducer } from "./assets";

const reducers = combineReducers({
    assets: AssetsReducer,
})

const appReducer = (state, action) => {
    return reducers(state, action)
}

export default appReducer