/* eslint-disable react/jsx-no-undef */
import {
  AppBar,
  Fab,
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
import BackToTop from './BackToTop';

import { ModalImovel } from '../ModalUser';
import { useUser } from '../core/UserProvider/useUser';

// styles
import LogoImg from '../../assets/logo.png';
import { Container, useStyles } from './styles';
import { LogoContainer } from './Logo';

export const Header = () => {
  const { user } = useUser();
  const classes = useStyles();

  //   _________ModalOpen
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ModalImovel open={open} handleClose={handleClose} />
      <AppBar position="fixed">
        <Container>

          <LogoContainer>
            <Link to="/Home">
              <img id="content" src={LogoImg} alt="" />
            </Link>
          </LogoContainer>

          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navListDisplayFlex}
          >
            {
                    user.nome
                      ? (
                        <ListItem
                          style={{ color: '#000000' }}
                          button
                          onClick={() => setOpen(true)}
                        >
                          <PersonIcon />
                          <ListItemText primary={`${user.nome}`} />
                        </ListItem>
                      )
                      : (
                        <>
                          <a style={{ fontSize: '10px' }} href="/login" key="login" className={classes.linkText}>
                            <ListItem style={{ fontSize: '10px' }} button>
                              <PersonIcon />
                              <ListItemText primary="login" style={{ fontSize: '10px' }} />
                            </ListItem>
                          </a>
                          <a href="/signin" key="cadastro" className={classes.linkText}>
                            <ListItem button>
                              <PersonAddIcon />
                              <ListItemText primary="cadastro" />
                            </ListItem>
                          </a>
                        </>
                      )
                }
          </List>
        </Container>

      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <BackToTop>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>

    </>
  );
};
