import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const MenuContent = styled.div`
margin-top: 20px;
display: flex;
flex:1;
max-width:80%;
`;

export const TextContainer = styled.div`
display: flex;
flex:1;
flex-direction: column;
align-items: center;
margin: 0 5%;
`;

export const TableContainer = styled.div`
display: flex;
max-width: 100%;
font-size: 10px;
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fefefe',
    display: 'flex',
    height: 800,
  },
  tabs: {
    maxWidth: '16%',
    backgroundColor: '#fefefe',
    minWidth: '16%',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
