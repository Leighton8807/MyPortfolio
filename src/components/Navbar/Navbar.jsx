import React, {useState} from 'react';
import styled from 'styled-components'
import BurguerButton from '../BurguerButton/BurguerButton';
//import { useState } from 'react';

function Navbar() {
  const [clicked, setClicked]= useState(false)
  const handleClick = () =>{
    //cuando está true lo pasa a false y y viceversa 
    setClicked(!clicked)
  }
  return(
    <>
    <NavContainer>
    <h2>Navbar <span>Responsive</span></h2>
    <div className={`links ${clicked ? 'active': ''}`}>
      <a href="/">Home</a>
      <a href="/">Proyects</a>
      <a href="/">Work Experience</a>
      <a href="/">Contact Me</a>
    </div>
    <div className='burguer'>
      <BurguerButton clicked= {clicked} handleClick={handleClick}/>
    </div>
    </NavContainer>
    </>
  )
}


export default Navbar;

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bolt;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  aling-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;

  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-aling: center;
    a{
      color: black;
      font-size: 2rem;
      display:block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }

    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-aling: center;
    a{
      color: #333;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;

    }
  }
`