import { combineReducers } from 'redux';
import { newReleases, playlists, categories } from './discover.reducer';

const rootReducer = combineReducers({
	newReleases: newReleases,
	playlists: playlists,
	categories: categories,
});

export default rootReducer;
