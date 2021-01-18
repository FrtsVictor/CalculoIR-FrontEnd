import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    align-items:center;
    flex-direction:column;
    font-family: 'Oxygen', sans-serif;
    max-height: 100px;
    background: radial-gradient(circle, #8a8989 0%, #fafafa 100%);

    h5{
        color:#fff;
        font-size:20px;
        color: #000000;

    }
`;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  color: #000000;
  gap: 5px;
`;

export const Link = styled.a`
  color: #fff;
  color: #000000;
  font-size: 12px;
  text-decoration: none;

  &:hover {
      color: #072072;
      transition: 100ms ease-in;
  }
`;

export const TeamDiv = styled.p`
  display:flex;
  align-items:center;
  flex-direction:column;
  font-size: 15px;
  color: #000000;
  justify-content:center;
  margin-bottom:5px;
`;