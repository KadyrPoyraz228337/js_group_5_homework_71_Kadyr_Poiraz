import axios from 'axios';
import {FETCH_EDIT_DISHES, INPUT_CHANGE_HANDLER} from "./actionTypes";

export const fetchEditableDish = (data) => ({type: FETCH_EDIT_DISHES, data});

export const inputChangeHandler = (name, value) => ({type: INPUT_CHANGE_HANDLER, name, value});

export const getEditebleDish = id => async dispatch => {
    const resp = await axios.get('https://burgerapp-9e830.firebaseio.com/dishes/'+id+'.json')
    dispatch(fetchEditableDish(resp.data))
};