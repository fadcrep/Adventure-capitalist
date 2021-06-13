import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  ProgressBar
} from 'react-bootstrap';

import store from '../../store';
import { putMoney, removeMoney } from '../money-barre/action';

class Product extends Component {
  constructor(props) {
    super(props);

    const { item } = this.props;

    this.state = {
      item,
      totalCostBuy: 0
    };

    this.buyProductClick = this.buyProductClick.bind(this);
    this.updateProductClick = this.updateProductClick.bind(this);
  }

  /**
   * Click buy product
   */
  buyProductClick() {
    this.buyProduct();
  }

  /**
   * click update product
   */
  updateProductClick() {
    const { dispatch } = store;
    const { item } = this.state;
    const { totalCostFactoryUnit } = item;
    const { money } = this.props;

    if (money - totalCostFactoryUnit < 0) {
      return;
    }

    dispatch(removeMoney(totalCostFactoryUnit));

    item.multi += 1;
    item.totalCostFactoryUnit *= item.multi;
    item.price += 1;

    this.setState({ item });
  }

  /**
   * Buy Product
   */
  buyProduct() {
    const { dispatch } = store;
    const { totalCostBuy, item } = this.state;
    const { price } = item;

    dispatch(putMoney(price));

    this.setState({
      totalCostBuy: totalCostBuy + price
    });
  }

  /**
   * render
   */
  render() {
    const {
      item,
      totalCostBuy
    } = this.state;

    const {
      image,
      multi,
      price,
      name,
      totalCostFactoryUnit
    } = item;

    const { money } = this.props;
    const progressPercent = ((money * 100) / totalCostFactoryUnit).toFixed(0);

    return (
      <Col md={12}>
        <Row className="shadow mb-3 bg-white rounded align-items-center product-row" onClick={this.buyProductClick}>
          <Col md={3}>
            <Row className="text-center align-items-center ">
              <Col md={12}>
                <h3>{`${price.toFixed(0)} $`}</h3>
              </Col>
              <Col md={12}>
                <img
                  src={image}
                  className="rounded product-picture"
                  alt="product"
                />
              </Col>
              <Col md={12}>
                <h3>{name}</h3>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <ProgressBar variant="success" now={progressPercent} />
          </Col>
          <Col md={5}>
            <Row className="align-items-center text-center">
              <Col md={12}>
                <h4>{`TotalCostBuy: $${totalCostBuy.toFixed(2)}`}</h4>
              </Col>
            </Row>
            <Row className="align-items-center text-center">
              <Col md={12} onClick={this.updateProductClick}>
                <h4 className="btn btn-secondary">{`UpdatePrice X${multi} : $${totalCostFactoryUnit.toFixed(2)}`}</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

const mapToProps = (state) => ({
  money: state.moneyReducer.money
});

export default connect(mapToProps)(Product);
