import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import BackGroundImg from '../../assets/background-login.jpg';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Background = styled.div`
margin:0;
height:100vh;
width:100vw;
background-image: url(${BackGroundImg});
background-size: cover;

button{
  display: flex;
  margin: 0 auto;
  max-width: 200px;
  min-width: 50%;
}

`;

export const LogoContainer = styled.div`
align-items:center;
display:flex;
flex:1;
justify-content:center;
mar
img{
        min-width: 250px;
        width: 5vw;
    }
`;

export const BackHome = styled.div`
padding: 15px 5px;
display: flex;
justify-content: flex-start;
    svg{
        fill:#253D71;
        font-size: 30px;
    }
    a{
        display: flex;
        align-self:center;
        font-size:20px;
        align-items:center;
        text-decoration: none;
        color: #253D71;
        &:hover{
        color: #93c6f9;
        transition: 0.4s;
        }
    }
`;

export const Alert = styled.p`
color: 'red';
font-size: '13px;
`;
