import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import {
  Container, Link, IconsDiv, TeamDiv,
} from './styles';

export const Footer = () => (
  <Container>

    <IconsDiv>
      <li className="list-unstyled">
        <Link href="https://www.instagram.com/alterdatasoftware/"><InstagramIcon /></Link>
      </li>
      <li className="list-unstyled">
        <Link href="https://www.facebook.com/softwarealterdata"><FacebookIcon /></Link>
      </li>
      <li className="list-unstyled">
        <Link href="https://www.linkedin.com/search/results/all/?keywords=alterdata&origin=GLOBAL_SEARCH_HEADER"><LinkedInIcon /></Link>
      </li>
    </IconsDiv>

    <TeamDiv>
      <p>Termos e Condições Gerais de contratação política de privacidade</p>
      &copy;
      {new Date().getFullYear()}
      Copyright by equipe Alterdata Software
    </TeamDiv>


  </Container>
);