import { all } from 'redux-saga/effects';
import { newReleasesSaga, playlistsSaga, categoriesSaga } from './discoverSaga';

export default function* rootSaga() {
	yield all([newReleasesSaga(), playlistsSaga(), categoriesSaga()]);
}
