import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import ContactMailIcon from '@material-ui/icons/ContactMail';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import emailjs from 'emailjs-com';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../styles';



const Result = () => {
  return (
    <p style={{ color: 'green' }}>
      Your Email has been Sent, We will be in touch with you as soon as
      possible.
    </p>
  );
};

const Contact = () => {
  const classes = useStyles();

  const [result, showResult] = useState(false);

  const userid = process.env.REACT_APP_USER_ID;
  const templateid = process.env.REACT_APP_TEMPLATE_ID;
  const serviceid = process.env.REACT_APP_SERVICE_ID;

  
  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJs
    emailjs.sendForm({serviceid}, {templateid}, e.target, {userid}).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    showResult(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ContactMailIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Contact Us
        </Typography>
        {result ? <Result /> : null}
        <form className={classes.form} onSubmit={sendEmail}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Enter Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="subject"
            label="Enter Subject"
            type="text"
            id="subject"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="message"
            label="Enter Message"
            type="text"
            id="message"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send Email
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
