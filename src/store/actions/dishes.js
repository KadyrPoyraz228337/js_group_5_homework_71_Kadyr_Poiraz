import {FETCH_DISHES} from "./actionTypes";
import axios from 'axios';

export const fetchDishes = data => ({type: FETCH_DISHES, data});

export const getDishes = () => async dispatch => {
  const resp = await axios.get('https://burgerapp-9e830.firebaseio.com/dishes.json');
  dispatch(fetchDishes(resp.data));
};
