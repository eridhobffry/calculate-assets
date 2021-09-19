import { ACTIONS } from "application/constants";
import { DefaultStore } from "../default_store";

export const AssetsReducer = (state = DefaultStore.assets, action) => {
    switch (action.type) {
        case ACTIONS.ASSETS_POST_DATA_REQUEST:
            return {
                ...state,
                request: true
            }
        case ACTIONS.ASSETS_STORE_PAYLOAD_REQUEST:
            return {
                ...state,
                requestFormPayload: action.payload
            }
        case ACTIONS.ASSETS_POST_DATA_SUCCEED:
            return {
                ...state,
                request: false,
                succeed: true,
            }
        case ACTIONS.ASSETS_POST_DATA_FAILED:
            return {
                ...state,
                request: false,
                failed: true,
            }
        case ACTIONS.ASSETS_POPULATE_CALCULATED_RESULTS:
            return {
                ...state,
                responseFormPayload: action.payload
            }
        default:
            return state
    }
}