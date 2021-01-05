import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles({
  navbarDisplayFlex: {
    backgroundColor: '#FFFFF',
    width: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  navListDisplayFlex: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '15px',
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#0000',
  },
});

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #FFFFFF;
width: 100%;
max-width: 100%;

    svg{
        margin-right: 5px;
    }

    a{
        display: flex;
        align-self:center;
        font-size:20px;
        align-items:center;
        text-decoration: none;
        color: #000000;

        &:hover{
        color: #9595;
        transition: 0.4s;
        transform: scale(1.1);
        }
`;
