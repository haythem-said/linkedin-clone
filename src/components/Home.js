import React from "react";
import styled from "styled-components";
import App from "../App";
import Leftside from "./Leftside";
import Rightside from "./RightSide";
const Home = (props) => {
  return (
    <Container>
      <Section>
        <p>Welcome haythem Said </p>
      </Section>
      <Layout>
        <Leftside />
        <div>mainSide</div>
        <Rightside />
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 100px;
  width: 100%;
`;
const Section = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  p {
    text-align: center;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside mainSide rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
