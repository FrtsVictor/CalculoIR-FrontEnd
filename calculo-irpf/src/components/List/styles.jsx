import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const TableContainer = styled.div`
display: flex;
flex-direction:column;
flex: 1;
margin: 15px 0;
font-size: 10px;
max-width: 700px;

  p{
    font-size: 15px;
    text-align:center;
  }

`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
margin: 0 5%;

div h4{
  display: flex;
  align-items: center;
  justify-content:center;
}

`;


export const Container = styled.div`
display:flex;
flex-direction:column;
align-content:center;

    span{
      font-size: 14px;
    }

  h4{
    margin-bottom:20px;
  }
`;
