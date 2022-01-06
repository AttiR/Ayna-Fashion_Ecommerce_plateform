import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';

import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { Typography, Grid, Button } from '@material-ui/core';
import useStyles from '../styles';

const HomeScreen = () => {
  const classes = useStyles();
  //const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  //productList from store
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  /*const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;*/

  useEffect(() => {
    /*const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();*/
    // we will ftech products using redux global state using hooks useDispatch, useSelector

    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <section className="intro-section">
        <div className="container">
          <div className="intro">
            <Typography align="center">
              {' '}
              <p className="intro-text">For your delicacies.</p>
            </Typography>

            {/*
            <h1 className="p-head">
              Welcome to <span>Ayna Fashion World</span>
            </h1>
            <p className="white-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod
              saepe vel voluptatem ratione possimus totam sed iure natus! Natus
              veritatis aliquam maxime placeat fugit esse harum fuga a rem!
            </p>*/}

            <Typography variant="h2" align="center" color="white" gutterBottom>
              Ayna's Fashion World
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Explore the latest fashions, designed by the professional
              designer. Wide range of formal and csual wearing is availble on
              reasonable price.
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to={'/contact'}>
                    <Button variant="contained" color="primary">
                      Contact Us
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={'/about'}>
                    <Button variant="contained" color="Red">
                      About Us
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>

      <Container className="py-5">
        <Typography
          variant="h2"
          color="textPrimary"
          gutterBottom
          className="mb-3"
        >
          Features Products
        </Typography>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message> // ternary operator
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default HomeScreen;
