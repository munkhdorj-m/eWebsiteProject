import React from "react";
import styled from "styled-components";
import { useNavigate, Routes, Route } from "react-router-dom";

const HeroText = (props) => {
  let navigate = useNavigate();
  return (
    <Container>
      <h5>Online education for people of all ages</h5>
      <h1>Learn</h1>
      <h1>Anything.</h1>
      <h1>Anytime.</h1>
      <h1>Anywhere.</h1>
      <BtnContainer>
        <Button onClick={() => navigate("/readmore")}>Read More</Button>
        <Button2>7 Day Free Trial</Button2>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    &:hover {
      box-shadow: 0px 17px 16px -11px #03fcb1;
      transform: translateY(-5px);
    }
  }
`;

const Button = styled.button`
   {
         background: #03fcb1;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #000000;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #03fcb1;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    color: #03fcb1;
    background-color: transparent;
    border: 3px solid #03fcb1;
    &:hover {
      box-shadow: 0px 17px 16px -11px #03fcb1;
      transform: translateY(-5px);}
`;

const Button2 = styled.button`
   {
         background: #03fcb1;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #000000;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #03fcb1;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    border: 3px solid #03fcb1;
    &:hover {
      box-shadow: 0px 17px 16px -11px #03fcb1;
      transform: translateY(-5px);}
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #8849c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;

export default HeroText;
