import styled from 'styled-components';

export const TableContainer = styled.div`
display: grid;
min-width: 100%;
grid-template-columns: 1fr 1fr 1fr;
margin-top: 25px;

 `;

export const TableHead = styled.div`
display: flex;
height: 35px;
font-weight: 600;
font-size: 0.8rem;
justify-content: center;
align-items:center;
color: #FFFFFF;
background-color: #000000;
`;

export const TableRow = styled.div`
display: flex;
align-items: center;
height: 35px;
font-size: 0.8rem;
`;
