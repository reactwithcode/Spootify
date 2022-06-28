import { useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCategories,
	getNewReleases,
	getPlaylists,
} from '../../../redux/actions/discover.action';
import '../styles/_discover.scss';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';

export default function Discover() {
	const newReleases = useSelector((state) => state.newReleases?.newReleases);
	const playlists = useSelector((state) => state.playlists?.playlists);
	const categories = useSelector((state) => state.categories?.categories);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNewReleases('new-releases', 'albums'));
		dispatch(getPlaylists('featured-playlists', 'playlists'));
		dispatch(getCategories('categories', 'categories'));
	}, [dispatch]);

	return (
		<div className="discover">
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				{
					<DiscoverBlock
						text="RELEASED THIS WEEK"
						id="released"
						data={newReleases || <Skeleton count={1} />}
					/>
				}

				<DiscoverBlock
					text="FEATURED PLAYLISTS"
					id="featured"
					data={playlists || <Skeleton count={1} />}
				/>
				<DiscoverBlock
					text="BROWSE"
					id="browse"
					data={categories || <Skeleton count={1} />}
					imagesKey="icons"
				/>
			</SkeletonTheme>
		</div>
	);
}
