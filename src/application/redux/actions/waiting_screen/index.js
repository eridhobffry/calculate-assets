import { ACTIONS } from "application/constants"

export const showWaitingScreen = () => ({
    type: ACTIONS.WAITING_SCREEN_SHOW
})

export const hideWaitingScreen = () => ({
    type: ACTIONS.WAITING_SCREEN_HIDE
})