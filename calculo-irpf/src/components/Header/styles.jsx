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
    color: '#0000',
  },
});

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
background-color: #FFFFFF;
max-height:70px;
height: 70px;
width: 100%;
max-width: 100%;

    svg{
        margin-right: 5px;
    }

    a div{
        display: flex;
        align-self:center;
        align-items:center;
        text-decoration: none;
        color: #000000;
    }

    span{
      font-size: 1rem;
    }


`;
