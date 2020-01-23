import {FETCH_DISHES_PRICE, FETCH_ORDERS} from "../actions/actionTypes";

export const ordersReducer = (state = {orders: null, dishesPrice: null}, action) => {
  switch (action.type) {
      case FETCH_ORDERS:
          return {
              ...state,
            orders: {...action.data}
          };
      case FETCH_DISHES_PRICE:
          return {
              ...state,
              dishesPrice: action.data,
          };
      default: return state;
  }
};

export default ordersReducer;