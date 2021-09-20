import { combineReducers } from "redux";
import { AssetsReducer } from "./assets";
import { WaitingScreenReducer } from "./waiting_screen";

const reducers = combineReducers({
    assets: AssetsReducer,
    waitingScreen: WaitingScreenReducer
})

const appReducer = (state, action) => {
    return reducers(state, action)
}

export default appReducer