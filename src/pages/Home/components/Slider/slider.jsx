import React, { useRef } from "react";
import "./slider.css";
import { Rerousel } from "rerousel";
import styled from "styled-components";
import { first, second, third, fourth } from '../../../../constants/images'

const Slider = () => {
  const ref = useRef(null);

  const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: solid 1px black;
    background-color: transparent;

    @media (max-width: 1150px) {
      width: 100%;
    }
  `;
  
  return (
    <Rerousel itemRef={ref}>
      <Item ref={ref}><img src={first} alt="first"/></Item>
      <Item><img src={second} alt="first"/></Item>
      <Item><img src={third} alt="first"/></Item>
      <Item><img src={fourth} alt="first"/></Item>
    </Rerousel>
  );
};

export default Slider;
