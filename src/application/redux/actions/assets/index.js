import { ACTIONS } from "application/constants"

export const postAssetsDetailsRequest = (payload) => ({
    type: ACTIONS.ASSETS_POST_DATA_REQUEST,
    payload
})

export const refreshAssetsDetailsRequest = () => ({
    type: ACTIONS.ASSETS_REFRESH,
    
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