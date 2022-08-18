import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/spacex-logo-white.png";
import bgImage from "../img/background2home.jpg";
export function HomePage() {
  return (
    <>
      <Home>
        <div class="container">
          <div class="banner">
         <img src={logo} alt="Logo" />
          </div>
        </div>
       
      </Home>
    </>
  );
}

const Home = styled.div`
width:100%;
height:100%;
display:flex;
background-color:grey;
justify-content:center;


.banner{
    display:flex;
    justify-content:center;
    align-items: center;
    width:100vw;
    height:100vh;


    background-image: url(${bgImage});;
    background-repeat: no-repeat;
    background-size: cover;
   
}
img{
    width:20rem;
}

`;
/*.banner{
    width:100vw;
    height:100vh;
 
    background-image: url(${bgImage});;
    background-repeat: no-repeat;
    background-size: cover;
   
}*/