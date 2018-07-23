
import _ from 'lodash';
import { GET_PROVIDERS } from '../actions';
import { GET_PROVIDER } from '../actions';
export default function(state = {}, action) {
    switch (action.type) {
      case GET_PROVIDERS:
        return _.mapKeys(action.payload.data, 'id');
      case GET_PROVIDER:
      return { ...state, [action.payload.data.id]: action.payload.data };
      default :
        return state;
    }
  }