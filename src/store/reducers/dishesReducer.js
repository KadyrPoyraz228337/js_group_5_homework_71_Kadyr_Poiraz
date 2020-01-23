import {FETCH_DISHES} from "../actions/actionTypes";

const dishesReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_DISHES:
            return {
                dishes: action.data
            }
        default: return state;
    }

};

export default dishesReducer;