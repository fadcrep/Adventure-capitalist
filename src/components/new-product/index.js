import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import store from '../../store';
import { removeMoney } from '../money-barre/action';
import { unlockProduct } from '../../actions/data';

const NewProduct = ({ money, data }) => {
  const getUnlockProductPrice = () => {
    let product;
    let i;
    for (i = 0; i < data.length; i += 1) {
      if (!data[i].unlock) {
        product = data[i];
        break;
      }
    }
    if (!product) {
      return null;
    }
    return product.unlockPricing;
  };

  const unlockProductClick = () => {
    const { dispatch } = store;
    const pricingProduct = getUnlockProductPrice();
    if ((money - pricingProduct) < 0) {
      return;
    }
    dispatch(removeMoney(pricingProduct));
    dispatch(unlockProduct());
  };

  const variant = (money - getUnlockProductPrice() < 0) ? 'secondary' : 'danger';

  return (
    <Button onClick={unlockProductClick} variant={variant} block>
      {`Unlock next product for [$${getUnlockProductPrice()}]`}
    </Button>
  );
};

const mapToProps = (state) => ({
  money: state.moneyReducer.money,
  data: state.data
});

export default connect(mapToProps)(NewProduct);
