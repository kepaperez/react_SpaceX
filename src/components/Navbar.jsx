import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import { Routes, Route, Link } from "react-router-dom";
import logo from '../img/spacex-logo-white.png'

export function Navbar() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
      <Nav>
        <div class="topnav" id="myTopnav">
          <Link to="/">
            <a><img src={logo} alt="Logo" /></a>
          
          </Link>
          <Link to="/rockets">
            <a onClick={myFunction}>Rockets</a>
          </Link>
          <Link to="/launches">
            <a onClick={myFunction}>Launches</a>
          </Link>
          <Link to="/missions">
            <a onClick={myFunction}>Missions</a>
          </Link>
          <a href="javascript:void(0);" class="icon" onClick={myFunction}>
           <a><i class="fa fa-bars"></i></a>
          </a>
        </div>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  width:100%;
  overflow: hidden;
  background-color:#0E0E0E;
  margin-bottom:4px;

  img{
    width:10rem;
  }
  a{
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  a.active {
    background-color: #04AA6D;
    color: white;
    
  }
.icon {
    display: none;

  }
  
  @media screen and (max-width: 600px) {
  a:not(:first-child) {display: none;}
  a.icon {
      float: right;
      display: block;
    }
  }
  
  @media screen and (max-width: 600px) {
   .responsive {position: relative;}
   .responsive a.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
  .responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  `;
