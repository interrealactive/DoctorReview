import _ from 'lodash';
import { GET_REVIEWS } from '../actions';
import { GET_REVIEW } from '../actions';
//The API doesn't return the post/patched/deleted values so these won't work unless i impliment my own middleware replacing redux-promice
//I'm using the action callback to invode the GET_REVIEWS method instead.
import { POST_REVIEW } from '../actions';
import { PATCH_REVIEW } from '../actions';
import { DELETE_REVIEW } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case GET_REVIEWS:
			return _.mapKeys(action.payload.data, 'id');
		case GET_REVIEW:
			return { ...state, [action.payload.data.id]: action.payload.data };
		case POST_REVIEW:
		case PATCH_REVIEW:
		case DELETE_REVIEW:
		default :
			return state;
	}
}