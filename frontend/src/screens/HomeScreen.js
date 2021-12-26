import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';

import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
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
            <p className="intro-text">For your delicacies.</p>
            <h1 className="p-head">
              Welcome to <span>foody dinner restaurant</span>
            </h1>
            <p className="white-text">
              Our meals are exquisite and tasty Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sit voluptatibus sapiente, ullam
              iste amet temporibus corporis itaque!
            </p>
            <Link className="btn btn-info" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Container className="py-5">
        <h1>Features Products</h1>

        {loading ? (
          <Loader/>
        ) : error ? (
          <Message variant='danger'>{error}</Message> // ternary operator
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
