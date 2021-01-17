/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import { apiIRPF } from '../../services';
import {
  Background, LogoContainer, useStyles, BackHome,
} from './styles';

export const SignIn = () => {
  const classes = useStyles();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
      nome: name
    };

    const resetFiled = () => {
      setUsername('');
      setPassword('');
      setLoading('');
    };

    await apiIRPF.userRoutes.register(newUser)
      .then(() => {
        setLoading(true);
        resetFiled();
      }).finally(
        () => setLoading(false),
      );
  };

  return (
    <Background>
      <BackHome>
        <Link to="/Home">
          <ArrowBackIcon />
          Home
        </Link>
      </BackHome>

      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <LogoContainer>
            <Link to="/Home"><img src={logoImg} alt="" /></Link>
          </LogoContainer>
          <form className={classes.form} noValidate onSubmit={handleSignUp}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Usuario"
                  name="username"
                  autoComplete="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Link to="Login" variant="body2" className={classes.link}>
                  Ja tem cadastro? Voltar para tela de login.
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {loading ? 'Loading' : 'Cadastrar'}
            </Button>
          </form>
        </div>
        <Box mt={5} />
      </Container>
    </Background>
  );
};
