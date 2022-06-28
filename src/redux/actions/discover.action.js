import * as type from '../types';

export function getNewReleases(path, resourceType) {
	return {
		type: type.GET_NEW_RELEASE_REQUESTED,
		path,
		resourceType,
	};
}

export function getPlaylists(path, resourceType) {
	return {
		type: type.GET_PLAYLISTS_REQUESTED,
		path,
		resourceType,
	};
}
export function getCategories(path, resourceType) {
	return {
		type: type.GET_CATEGORIES_REQUESTED,
		path,
		resourceType,
	};
}
