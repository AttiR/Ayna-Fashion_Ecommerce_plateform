import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { getUserDetails } from '../actions/userActions';


const UserEditScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.id;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

 

  useEffect(() => {

    if(!user.name || user._id !== userId){

        dispatch(getUserDetails(userId))

    }else{

        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)

    }
   
  }, [dispatch, user,  userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
    <Container className='mt-5'>
      <Link to="/admin/userlist" className="btn btn-info my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isadmin">
              <Form.Check className='mt-3'
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="success" className='mt-3'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
      </Container>
    </>
  );
};

export default UserEditScreen;
