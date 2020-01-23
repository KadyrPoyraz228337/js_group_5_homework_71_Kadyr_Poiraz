import {FETCH_EDIT_DISHES, INPUT_CHANGE_HANDLER} from "../actions/actionTypes";

const editReducer = (state = null, action) => {
  switch (action.type) {
      case FETCH_EDIT_DISHES:
          return {
            dish: action.data
          };
      case INPUT_CHANGE_HANDLER:
          return {
              ...state,
              dish: {
                  ...state.dish,
                  [action.name]: action.value
              }
          };
      default: return state;
  }
};

export default editReducer;