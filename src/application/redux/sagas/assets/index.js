import { api } from 'application/api'
import { ACTIONS } from 'application/constants'
import { takeEvery, call, put, delay } from 'redux-saga/effects'
import { populateCalculatedAssetsDetails, postAssetsDetailsSucceed, postAssetsDetailsFailed } from 'application/redux/actions/assets'
import { showWaitingScreen, hideWaitingScreen } from 'application/redux/actions/waiting_screen'
import { assetPayloadMapper, chartDataMaker } from './assets_payload_mapper'

function* postAssetsDetailsRequestSaga(action) {
    try {
        yield put(showWaitingScreen())
        yield delay(2000)
        const mappedPayload = assetPayloadMapper(action.payload)
        const calculatedAssets = yield call(api.gateway.assets.postAssetsData, mappedPayload)
        yield put(populateCalculatedAssetsDetails(chartDataMaker(calculatedAssets.response)))
        yield put(postAssetsDetailsSucceed())
        yield put(hideWaitingScreen())
    } catch (error) {
        yield put(postAssetsDetailsFailed())
        yield put(hideWaitingScreen())
    }
}

export function* assetsWatcher() {
    yield takeEvery(ACTIONS.ASSETS_POST_DATA_REQUEST, postAssetsDetailsRequestSaga)
}