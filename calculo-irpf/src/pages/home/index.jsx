/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import { Header } from '../../components/Header';
import { VerticalTabs } from '../../components/VerticalTab';
import { Container } from './styles';

export const Home = () => {
  const a = 1;

  return (
    <>
      { a }
      <Header />
      <Container>
        <VerticalTabs />
      </Container>
    </>
  );
};
