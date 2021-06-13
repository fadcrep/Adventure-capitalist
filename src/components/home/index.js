import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import MoneyBarre from '../money-barre';
import Product from '../product';
import Header from './header';

const Home = ({ data }) => (
  <Container className="main p-3 border">
    <Header />
    <MoneyBarre />
    <Row className="p-3">
      {data
        .filter((product) => product.unlock)
        .map((product) => <Product item={product} />)}
    </Row>
  </Container>
);

const mapToProps = (state) => ({
  data: state.data
});

export default connect(mapToProps)(Home);
