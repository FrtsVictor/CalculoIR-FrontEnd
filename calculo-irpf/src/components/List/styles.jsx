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
font-size: 10px;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 5%;
`;

export const ChartContainer = styled.div`
display: flex;
height: 400px;
width: 400px
`;
