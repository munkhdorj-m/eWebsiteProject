import React from "react";
import styled from "styled-components";
import bg from "../assets/bg.jpg";

const Hero = (props) => {
  const Text = props.inner;
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Text navigate={props.navigate} />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
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
export default Hero;
