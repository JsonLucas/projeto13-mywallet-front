import styled from 'styled-components';

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(140, 17, 190);
    justify-content: center;
    align-items: center;
`;

export const ContainerFormLogin = styled.div`
    width: 90%;
    height: auto;
    margin: auto;
    margin-top: 25%;
    box-sizing: border-box;
`;

export const RowTitle = styled.div`
    margin: auto;
    width: auto;
    height: auto;
    box-sizing: border-box;
    padding: 10px;
`; 

export const TitleLogin = styled.p`
    color: white;
    font-size: 30px;
    text-align: center;
    font-family: 'Black Ops One', cursive;
`;

export const CardFormLogin = styled.form`
    box-sizing: border-box;
    padding: 10px;
    width: 90%;
    height: auto;
    margin: auto;
`;

export const LoginFields = styled.div`
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
`;

export const IsEqual = styled.p`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-weight: bold;
    font-size: 13px;
    ${props => !props.equal ? 'color: yellow;' : 'display: none'}
`;

export const Field = styled.input`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    background-color: ${props => props.type === 'submit' 
    ? 'rgba(163, 40, 214); color: white; font-weight: bolder;' 
    : 'none;'}
`;

export const RowCreateAcc = styled.div`
    margin: auto;
    margin-top: 15px;
`;

export const CreateAcc = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: white;
    text-align: center;
    font-family: 'Be Vietnam Pro', sans-serif;
`;