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
flex: 1;
font-size: 10px;
min-width: 80%;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 5%;

div h4{
  display: flex;
  align-items: center;
  justify-content:center;
}

`;

export const ChartContainer = styled.div`
display: flex;
height: 400px;
width: 400px
`;

export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;

  h4{
    margin-bottom:20px;
  }
`;
