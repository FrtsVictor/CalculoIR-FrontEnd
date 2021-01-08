import styled from 'styled-components';

export const TableContainer = styled.div`
display: flex;
min-width: 600px;
flex-direction: column;
font-size: 0.90rem;

div:nth-child(2n+2) {
    background: #F0F0F0;
}

`;

export const TableRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;

p{
  margin-right: 10px;
}

`;

export const TableHead = styled.div`
display: flex;
height: 50px;
align-items: center;
font-weight: 600;
justify-content: center;
color: #FFFFFF;
background-color: #000000;
`;
