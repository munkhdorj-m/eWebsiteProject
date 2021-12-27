import React from "react";
import Tilt from "react-tilt";
import image from "../assets/hero.png";
import styled from "styled-components";
import BodyText from "./BodyText";

const Home = () => {
  return (
    <div>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <BodyText />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <Img src={image} alt="" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </div>
  );
};

export default Home;

const Img = styled.img`
  width: 100%;
`;

const TiltWrapper = styled(Tilt)`
  width: 60%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
    /* padding: 1rem; */
  }
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* margin: 2rem; */
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
  }
`;
const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
