import React from "react";
import { Link } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  FormControl,
  Toolbar,
  Typography,
  withTheme,
} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Nav, Navbar } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({
  Name: {
    backgroundColor: "#0A548C",
    color: "#F39C12 ",
  },
  btn: {
    backgroundColor: "#F39C12 ",
    "&:hover": {
      background: "white",
      color: "#F39C12 ",
    },
  },
  navLinks: {
    marginRight: "auto",
  },
}));
const TopBar = () => {
  const classes = useStyles();
  return (
    <Navbar className={classes.Name} variant="dark">
      <Navbar.Brand href="/">
        <em>Datalytics</em>
      </Navbar.Brand>
      <Nav className={classes.navLinks}>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">Districts</Nav.Link>
        <Nav.Link href="/">Schools</Nav.Link>
        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info" className={classes.btn}>
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default TopBar;