export const actionTypes = {
  PUT_MONEY: 'PUT_MONEY',
  REMOVE_MONEY: 'REMOVE_MONEY'
};

export const putMoney = (money) => ({
  type: actionTypes.PUT_MONEY,
  money
});

export const removeMoney = (money) => ({
  type: actionTypes.REMOVE_MONEY,
  money
});
