/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
// Icons
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// Hooks
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthProvider';
// Styles
import {
  Background, useStyles, LogoContainer, BackHome
} from './styles';
import LogoImg from '../../assets/alterdata.png';
import { verifyApiLoginErrors } from '../../services/index';

export const Login = () => {
  const classes = useStyles();
  // user
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  // errors
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetFiled = () => {
    setUsername('');
    setPassword('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage(' * Usuario e senha obrigatorios');
      setError(true);
      return;
    }

    setLoading(true);
    try {
      let apiMessageError = await login(username, password);

      apiMessageError = verifyApiLoginErrors(apiMessageError);

      if (!apiMessageError) {
        history.push('/home');
        return;
      }
      setError(true);
      setErrorMessage(apiMessageError);
    } catch (err) {
      console.log('Login  error', err);
    } finally {
      setLoading(false);
      resetFiled();
    }
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
            <Link to="/Home"><img src={LogoImg} alt="" /></Link>
          </LogoContainer>

          <form className={classes.form} noValidate onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="dense"
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
              margin="dense"
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
            {
              error
              && (
              <p style={{ color: 'red', fontSize: '13px', marginBottom: '5px' }}>
                {errorMessage}
              </p>
              )
            }
            <Link
              style={{ fontSize: '14px' }}
              to="/cadastro"
              variant="body2"
            >
              Não possui uma conta? Crie aqui
            </Link>
            <Button
              style={{ marginTop: '15px' }}
              type="submit"
              variant="contained"
              className={classes.submit}
            >
              {loading ? 'Loading' : 'Entrar'}
            </Button>
            <Grid item style={{ margin: '15px' }} />
          </form>
        </div>
      </Container>
    </Background>
  );
};
