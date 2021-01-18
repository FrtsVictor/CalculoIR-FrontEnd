import React, { useState } from 'react';
// @material & icons
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// navigation & api
import { Link, useHistory } from 'react-router-dom';
import { apiIRPF, verifyApiLoginErrors } from '../../services';
//styles
import logoImg from '../../assets/alterdata.png';
import {
  Background, LogoContainer, useStyles, BackHome
} from './styles';

export const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  // user
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // messages
  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("red");
  const [sucessMessage, setSucessMessage ] = useState(false);

  const resetFiled = () => {
    setUsername('');
    setPassword('');
    setLoading(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
      nome: name
    };

    if (!username || !password || !name) {
      setErrorMessage('* Usuario e senha obrigatorios');
      setMessage(true);
      return;
    }

    setLoading(true);
    await apiIRPF.userRoutes.register(newUser)
      .then((resp) => {
        const apiMessageError = verifyApiLoginErrors(resp);

        if (!apiMessageError) {
          setColor("green")
          setSucessMessage("Usuario cadastrado com sucesso!!")
          setMessage(true)

          setTimeout(() => {
            history.push('/login');
          }, 2000);
          return;
        }
        setMessage(true);
        setErrorMessage(apiMessageError);
        resetFiled();
      }).finally(() => {
        resetFiled();
      });
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
            <TextField
              variant="outlined"
              required
              margin="dense"
              fullWidth
              id="name"
              label="Nome"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              margin="dense"
              autoComplete="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              margin="dense"
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
              {
                message
                && (
                  <p style={{ color: `${color}`, fontSize: '13.5px', marginBottom: "10px"}}>
                    {errorMessage} {sucessMessage}
                  </p>
                )
              }
            <Grid item>
              <Link to="Login" variant="body2" className={classes.link}>
                Ja tem cadastro? Voltar para tela de login.
              </Link>
            </Grid>
            <Button
              style={{ marginTop: '15px' }}
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

      </Container>
    </Background>
  );
};
