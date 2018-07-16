import { FETCH_MOTORCYCLES, FETCH_MOTORCYCLE } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MOTORCYCLES:
      return action.payload
    default:
      return state;
    case FETCH_MOTORCYCLE:
      return [action.payload]
  }
}
