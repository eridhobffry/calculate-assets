import { api } from 'application/api'
import { ACTIONS } from 'application/constants'
import { takeEvery, call, put, delay } from 'redux-saga/effects'
import { populateCalculatedAssetsDetails, postAssetsDetailsSucceed, postAssetsDetailsFailed } from 'application/redux/actions/assets'

function* postAssetsDetailsRequestSaga(action) {
    yield delay(2000)
    try {
        const calculatedAssets = yield call(api.gateway.assets.postAssetsData, action.payload)
        yield put(populateCalculatedAssetsDetails(calculatedAssets.response))
        yield put(postAssetsDetailsSucceed())
    } catch (error) {
        yield put(postAssetsDetailsFailed())
    }
}

export function* assetsWatcher() {
    yield takeEvery(ACTIONS.ASSETS_POST_DATA_REQUEST, postAssetsDetailsRequestSaga)
}