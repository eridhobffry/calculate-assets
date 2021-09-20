import { DefaultStore } from '../default_store'
import { ACTIONS } from "application/constants"

export const WaitingScreenReducer = (state = DefaultStore.waitingScreen, action) => {
    switch (action.type) {
        case ACTIONS.WAITING_SCREEN_SHOW:
            return {
                ...state,
                isVisible: true
            }
        case ACTIONS.WAITING_SCREEN_HIDE:
            return {
                ...state,
                isVisible: false
            }
        default:
            return state
    }
}