/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
// Icons
import Button from '@material-ui/core/Button';
// Material Components
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// Hooks
import { Link } from 'react-router-dom';
// import { useAuth } from '../../hooks/AuthProviderIntegracao';
// Styles
import {
  Background, useStyles, LogoContainer, BackHome,
} from './styles';
import LogoImg from '../../assets/alterdata.png';

export const Login = () => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const history = useHistory();
  // const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) return;

    setLoading(true);

  //   try {
  //     await login(username, password);
  //     console.log('Login Sucess');
  //     history.push('/favoritos');
  //   } catch (error) {
  //     console.log('Login  error', error);
  //   } finally {
  //     setLoading(false);
  //   }
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
        <CssBaseline />
        <div className={classes.paper}>

          <LogoContainer>
            <Link to="/Home"><img src={LogoImg} alt="" /></Link>
          </LogoContainer>
          <form className={classes.form} noValidate onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuário"
              name="username"
              autoComplete="usename"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar minhas credenciais"
            />
            <Button
              type="submit"
              variant="contained"
              color="#8d8e8f"
              className={classes.submit}
            >
              {loading ? 'Loading' : 'Entrar'}
            </Button>
            <Grid item style={{ margin: '15px' }}>
              <Link to="/cadastro" variant="body2">
                Não tem uma conta? Crie aqui
              </Link>
            </Grid>
          </form>
        </div>
      </Container>
    </Background>
  );
};
