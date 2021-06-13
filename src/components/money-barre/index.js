import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import NewProduct from '../new-product';

const MoneyBarre = ({ money }) => (
  <Row className="border-bottom money-barre">
    <Col md={6} className="text-center">
      <img className="player" src="https://image.flaticon.com/icons/png/512/3286/3286414.png" alt="player" />
    </Col>
    <Col md={6} className="d-flex align-items-center justify-content-center">
      <Row>
        <Col md={12}>
          <h1>{`Balance: $ ${money.toFixed(2)}`}</h1>
        </Col>
        <Col md={8}>
          <NewProduct />
        </Col>
      </Row>
    </Col>
  </Row>
);

const mapToProps = (state) => ({
  money: state.moneyReducer.money
});

export default connect(mapToProps)(MoneyBarre);
