import styled from 'styled-components';

export const Logo = styled.img`
    max-width: 200px;
    height: 70px;
    margin: 5px;

&:hover{
    cursor:pointer;
}

`;

export const LogoContainer = styled.div`
display:flex;
align-content:center;
justify-content: center;
margin:15px 15px 15px 50px;

    img{
        align-content: center;
        justify-content: center;
        width: 165px;
        height: 30px;
        flex: 1
    }

    a{
      display:flex;
      align-items:center;
      color: #575757;

      &:hover{
        transition: none;
        transform: none;
        }
    }
`;
