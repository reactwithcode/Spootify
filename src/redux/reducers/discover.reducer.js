import * as type from '../types';

const initialNewReleaseState = {
	newReleases: [],
	loading: false,
	error: null,
};

export function newReleases(state = initialNewReleaseState, action) {
	switch (action.type) {
		case type.GET_NEW_RELEASE_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case type.GET_NEW_RELEASE_SUCCESS:
			return {
				...state,
				loading: false,
				newReleases: action.newReleases,
			};
		case type.GET_NEW_RELEASE_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			};
		default:
			return state;
	}
}

const initialPlaylistsState = {
	playlists: [],
	loading: false,
	error: null,
};

export function playlists(state = initialPlaylistsState, action) {
	switch (action.type) {
		case type.GET_PLAYLISTS_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case type.GET_PLAYLISTS_SUCCESS:
			return {
				...state,
				loading: false,
				playlists: action.playlists,
			};
		case type.GET_PLAYLISTS_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			};
		default:
			return state;
	}
}


const initialCategoriesState = {
	categories: [],
	loading: false,
	error: null,
};

export function categories(state = initialCategoriesState, action) {
	switch (action.type) {
		case type.GET_CATEGORIES_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case type.GET_CATEGORIES_SUCCESS:
			return {
				...state,
				loading: false,
				categories: action.categories,
			};
		case type.GET_CATEGORIES_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			};
		default:
			return state;
	}
}
