import { actionTypes } from './action';

const initialState = {
  money: 0
};

const putMoney = (state, action) => ({
  money: state.money + action.money
});

const removeMoney = (state, action) => ({
  money: state.money - action.money
});

const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PUT_MONEY:
      return putMoney(state, action);
    case actionTypes.REMOVE_MONEY:
      return removeMoney(state, action);
    default:
      return state;
  }
};

export default moneyReducer;
