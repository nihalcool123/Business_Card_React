import React from "react";
import Brand from "./Brand";
import { Container } from "./Container";
import { GlobalStyle } from "./GlobalStyle";
import { Card } from "./Card";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Brand />
        <Chart />
        <Card height={400}>Table goes here</Card>
      </Container>
    </>
  );
};

export default Dashboard;
