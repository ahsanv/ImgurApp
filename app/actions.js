import {
	IMGS_LOADED
} from './constants';

export function imagesLoaded(images) {
	return { type: IMGS_LOADED, images }
}
