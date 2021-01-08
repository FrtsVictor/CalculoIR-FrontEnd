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
max-width: 100%;
font-size: 10px;
`;

export const ItemList1 = styled.div`
background-color: ${(props) => {
    if (props.activeColor) {
      return '#cfcfcf';
    } return 'white';
  }};
`;

export const ItemList2 = styled.div`
  background-color: ${(props) => {
    if (props.activeColor) {
      return '#cfcfcf';
    } return 'white';
  }}
`;

export const ItemList3 = styled.div`
background-color: ${(props) => {
    if (props.activeColor) {
      return '#cfcfcf';
    } return 'white';
  }}
`;

export const ItemList4 = styled.div`
background-color: ${(props) => {
    if (props.activeColor) {
      return '#cfcfcf';
    } return 'white';
  }}
`;

export const ItemList5 = styled.div`
background-color: ${(props) => {
    if (props.activeColor) {
      return '#cfcfcf';
    } return 'white';
  }}
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 5%;
`;
