import styled from 'styled-components';

export const LeftMenu = styled.div`
    display: flex;
    min-width: 16%;
    max-width: 20%;
    border-right: 1px solid #000;
    background-color: #dad8d8;
`;

export const Container = styled.div`
    display: flex;
    background-color: #fafafa;
    flex:1;
    height: 100vh;
    width: 100vw;
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  max-width: 100%;
  min-width: 100%;
  align-items:center;

  h4{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    }

  p{
    display: flex;
  }
`;

export const MenuContent = styled.div`
display: flex;
justify-content: center;
`;
