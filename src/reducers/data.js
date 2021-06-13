import { actionTypes } from '../actions/data';

const initialState = [{
  unlock: true,
  unlockPricing: 0,
  multi: 1,
  name: 'pikachu',
  price: 2,
  totalCostFactoryUnit: 2,
  image: 'https://image.flaticon.com/icons/png/512/188/188987.png'
}, {
  unlock: false,
  unlockPricing: 20,
  multi: 1,
  name: 'psyduck',
  price: 4,
  totalCostFactoryUnit: 120,
  image: 'https://image.flaticon.com/icons/png/512/189/189000.png'
}, {
  unlock: false,
  unlockPricing: 500,
  multi: 1,
  name: 'chamander',
  price: 8,
  totalCostFactoryUnit: 150,
  image: 'https://image.flaticon.com/icons/png/512/188/188990.png'
}];

const unlockProduct = (state) => {
  const stateUpdated = [...state];
  const index = stateUpdated.findIndex((item) => !item.unlock);

  stateUpdated[index].unlock = true;

  return stateUpdated;
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UNLOCK_PRODUCT:
      return unlockProduct(state);
    default:
      return state;
  }
};

export default data;
