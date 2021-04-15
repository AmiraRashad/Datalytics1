import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container,Carousel,Card,CardDeck } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import {} from "react-icons/fa"
import { BsFillPeopleFill } from "react-icons/bs";
import { BiDollar,BiPaperPlane } from "react-icons/bi";
import "../index.css";
import "../App.css";
const Landingpage = () => {
    return ( 
        <div>
        <Grid contained>
            <Grid contained>
                <h1 style={{textAlign:"center",color:"black"}}><em>Datalytics</em></h1>
            </Grid>
        </Grid>
         </div>
       );
    }
    

    export default Landingpage;