import { React, useState } from 'react';
import { Header } from '../../components/Header';
import { VerticalTabs } from '../../components/VerticalTab';
import { Container } from './styles';
import { Footer } from '../../components/Footer';
export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <VerticalTabs />
      </Container>
      {/* <Footer /> */}
    </>
  );
};
