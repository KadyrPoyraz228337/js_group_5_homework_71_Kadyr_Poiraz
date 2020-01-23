import {FETCH_DISHES, FETCH_DISHES_PRICE, FETCH_ORDERS} from "./actionTypes";
import * as axios from "axios";

export const fetchOrders = data => ({type: FETCH_ORDERS, data});
export const fetchDishesPrice = data => ({type: FETCH_DISHES_PRICE, data});

export const getOrders = () => async dispatch => {
  const resp = await axios.get('https://burgerapp-9e830.firebaseio.com/orders.json');
  dispatch(fetchOrders(resp.data));
};

export const getDishesPrice = () => async dispatch => {
    const resp = await axios.get('https://burgerapp-9e830.firebaseio.com/dishes.json');
    dispatch(fetchDishesPrice(resp.data));
};