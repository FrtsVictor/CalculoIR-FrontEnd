import React, { useState } from 'react';
// Icons e @material
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// Hook & navigation
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthProvider';
import { verifyApiLoginErrors } from '../../services/index';
// Styles
import {
  Background, useStyles, LogoContainer, BackHome
} from './styles';
import LogoImg from '../../assets/alterdata.png';

export const Login = () => {
  const classes = useStyles();
  // user
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  // messages
  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("red");
  const [sucessMessage, setSucessMessage ] = useState(false);

  const resetFiled = () => {
    setUsername('');
    setPassword('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage(' * Usuario e senha obrigatorios');
      setMessage(true);
      return;
    }

    setLoading(true);
    try {
      let apiMessageError = await login(username, password);

      apiMessageError = verifyApiLoginErrors(apiMessageError);

      if (!apiMessageError) {
        setColor("green")
        setSucessMessage("Login efetuado com sucesso!!")
        setMessage(true)

         setTimeout(() => {
            history.push('/home');
          }, 1000);
        return;
      }
      setMessage(true);
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
              message
              && (
              <p style={{
                 color: `${color}`,
                 fontSize: '13px',
                 marginBottom: '5px' }}>
                {errorMessage}
                {sucessMessage}
              </p>
              )
            }
            <Link
              style={{ fontSize: '14px' }}
              to="/signin"
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
