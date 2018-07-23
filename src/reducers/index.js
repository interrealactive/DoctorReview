import { combineReducers } from 'redux';
import ProviderReducer from './reducer_providers';
import ReviewReducer from './reducer_reviews';
import SelectReducer from './reducer_selection';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    providers: ProviderReducer,
    reviews: ReviewReducer,
		form: formReducer,
		selection: SelectReducer
});

export default rootReducer;