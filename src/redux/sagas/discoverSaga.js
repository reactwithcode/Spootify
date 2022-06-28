import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import qs from 'querystring';
import config from '../../config';

const { api } = config;

async function getApi(path, resourceType) {
	const apiUrl = `${api.baseUrl}/browse/${path}?locale=en_US`;

	const {
		data: { access_token: token },
	} = await axios.post(
		api.authUrl,
		qs.stringify({ grant_type: 'client_credentials' }),
		{
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${btoa(`${api.clientId}:${api.clientSecret}`)}`,
			},
		}
	);

	const res = await axios
		.get(apiUrl, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response)
		.catch((error) => {
			throw error;
		});

	return res.data[resourceType].items;
}

function* fetchNewReleases(action) {
	try {
		const newReleases = yield call(getApi, action.path, action.resourceType);
		yield put({ type: 'GET_NEW_RELEASE_SUCCESS', newReleases: newReleases });
	} catch (e) {
		yield put({ type: 'GET_NEW_RELEASE_FAILED', message: e.message });
	}
}

export function* newReleasesSaga() {
	yield takeEvery('GET_NEW_RELEASE_REQUESTED', fetchNewReleases);
}

function* fetchPlaylists(action) {
	try {
		const playlists = yield call(getApi, action.path, action.resourceType);
		yield put({ type: 'GET_PLAYLISTS_SUCCESS', playlists: playlists });
	} catch (e) {
		yield put({ type: 'GET_PLAYLISTS_FAILED', message: e.message });
	}
}

export function* playlistsSaga() {
	yield takeEvery('GET_PLAYLISTS_REQUESTED', fetchPlaylists);
}
function* fetchCategories(action) {
	try {
		const categories = yield call(getApi, action.path, action.resourceType);
		yield put({ type: 'GET_CATEGORIES_SUCCESS', categories: categories });
	} catch (e) {
		yield put({ type: 'GET_CATEGORIES_FAILED', message: e.message });
	}
}

export function* categoriesSaga() {
	yield takeEvery('GET_CATEGORIES_REQUESTED', fetchCategories);
}
