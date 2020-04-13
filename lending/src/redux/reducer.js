import { combineReducers } from 'redux';


const count  = (state = {counter: 0}, action) => {
  switch (action.type) {
    case 'INCREASE':
      let newCountI = state.counter + 1;
      return {counter: newCountI};
    case 'DECREASE':
      let newCountD = state.counter - 1;
      return {counter: newCountD};
    case 'SET_COUNTER':
      
      return {counter: action.data ? action.data : 0};
    default:
      return state;
  }
}


export default combineReducers({
  count
});