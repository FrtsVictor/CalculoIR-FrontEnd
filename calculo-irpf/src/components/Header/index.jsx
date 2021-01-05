/* eslint-disable react/jsx-no-undef */
import {
  AppBar,
  Fab, Hidden,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.png';
import BackToTop from './BackToTop';
import HideOnScroll from './HideOnScroll';
import { LogoContainer } from './Logo';
import SideDrawer from './SideDrawer';
// styles
import { Container, useStyles } from './styles';

const navLinks = [
  { title: 'login', path: '/login' },
  { title: 'cadastro', path: '/calculo' },
  { title: 'search', path: '/search' },
];

export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Container>

            <LogoContainer>
              <Link to="/Home">
                <img src={LogoImg} alt="" />
              </Link>
            </LogoContainer>

            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navListDisplayFlex}
              >
                <a href="/login" key="login" className={classes.linkText}>
                  <ListItem button>
                    <PersonIcon />
                    <ListItemText primary="login" />
                  </ListItem>
                </a>
                <a href="/cadastro" key="cadastro" className={classes.linkText}>
                  <ListItem button>
                    <PersonAddIcon />
                    <ListItemText primary="cadastro" />
                  </ListItem>
                </a>
              </List>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </Container>

        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />

      <BackToTop>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>

    </>
  );
};
