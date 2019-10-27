// evaluate any actions .... fetchinching posts creating new posts
// create action types which are constants
import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initaialState = {
    items: [],
    item: {}
}

export default function(state= initaialState, action){
    console.log("has payload? ",action);
    switch(action.type){
        case FETCH_POSTS: 
            return {
                ...state,
                items:action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}