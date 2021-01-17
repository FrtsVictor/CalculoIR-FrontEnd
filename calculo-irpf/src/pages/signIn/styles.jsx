import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import BackGroundImg from '../../assets/background_login.jpg';
import logoImg from '../../assets/logo.png';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,

  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: '#3F51B5',
    fontWeight: 'bold',
  },
}));

export const Background = styled.div`
margin:0;
height:100vh;
width:100vw;
background-image: url(${BackGroundImg});
background-size: cover;
`;

export const logoImage = styled.div`
background-image: url(${logoImg});
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
