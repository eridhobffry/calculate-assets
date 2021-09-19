import { ACTIONS } from "application/constants"

export const postAssetsDetailsRequest = () => ({
    type: ACTIONS.ASSETS_POST_DATA_REQUEST
})

export const storeAssetsDetailsRequest = (payload) => ({
    type: ACTIONS.ASSETS_STORE_PAYLOAD_REQUEST,
    payload
})

export const postAssetsDetailsFailed = () => ({
    type: ACTIONS.ASSETS_POST_DATA_FAILED,
})

export const postAssetsDetailsSucceed = () => ({
    type: ACTIONS.ASSETS_POST_DATA_SUCCEED,
})

export const populateCalculatedAssetsDetails = (payload) => ({
    type: ACTIONS.ASSETS_POPULATE_CALCULATED_RESULTS,
    payload
})