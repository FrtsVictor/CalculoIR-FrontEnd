import styled from 'styled-components';

// Containers

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const PapperContainer = styled.div`
    display: flex;
    min-width: 30vw;
    width: 30vw;
    height: 70vh;
    border-radius: 20px;
    margin:  0 auto;
    color:#03020c;
    background-color: #fff;
    justify-content: center;
    align-items:center;
    transition: 500ms;
    border-right:1px solid black;
    font-style:Roboto, sans-serif;

`;

export const MenuText = styled.p`
align-items:flex-start;
justify-content: flex-start;
display:flex;
flex:1;
`;

export const InfoP = styled.p`
font-size: 1rem;
justify-content: center;
display:flex;
width:10%;
`;

export const IconInfo = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width: 100%;
margin-bottom: 3vh;
`;
