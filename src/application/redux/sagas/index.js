import { all } from 'redux-saga/effects'
import { assetsWatcher } from './assets'

export default function* rootSaga() {
    yield all([
        assetsWatcher(),
    ])
}