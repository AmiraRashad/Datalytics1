import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, FormControl, Toolbar, Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Nav, Navbar} from 'react-bootstrap';
 const useStyles = makeStyles((theme) => ({
    
  Name: {
       color: "#F39C12",
       backgroundColor: " #084F86 ",
     },
     
   }));
const TopBar= () => {
    
    const classes = useStyles();
     return ( 
    
    <Navbar className= "color-nav" bgcolor="" variant="dark">
    <Navbar.Brand  href="/"><em>Datalytics</em></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link  href="/">Home</Nav.Link>
      <Nav.Link href="/">Districts</Nav.Link>
      <Nav.Link href="/">Schools</Nav.Link>
      <Nav.Link href="/contact-us">Contact Us</Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info" className={classes.Name}>Search</Button>
    </Form>
  </Navbar>
    );

}
 
export default TopBar;