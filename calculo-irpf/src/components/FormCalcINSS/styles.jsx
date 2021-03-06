import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const UseStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const FormContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

export const ButtonContainer = styled.div`
display: flex;
align-items:center;
justify-content:center;
margin-top: 20px;
margin-bottom: 10px;
`;
