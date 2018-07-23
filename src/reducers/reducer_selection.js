// This seems unnessecary since the provider is in the route. However, I can't seem to find how to access it from the ProviderList so it should work for now
import { SELECT_PROVIDER } from '../actions';
export default function(state = 0, action) {
	switch (action.type) {
		case SELECT_PROVIDER:
			return action.payload;
		default :
			return state;
	}
}