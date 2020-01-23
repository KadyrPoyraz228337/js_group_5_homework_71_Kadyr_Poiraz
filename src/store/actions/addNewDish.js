import axios from 'axios';

export const addNewDish =  data => async dispatch => await axios.post('https://burgerapp-9e830.firebaseio.com/dishes.json', data);
