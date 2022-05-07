import styled from 'styled-components';

export const RowSubtitlePage = styled.div`
    position: relative;
    width: 90%;
    height: auto;
    margin: auto;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

export const SubtitlePage = styled.p`
    ${props => props.type === 'icon' ? 'font-size: 22px;' : 'font-size: 18px;'}
    color: white;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-weight: bolder;
`;

export const Registers = styled.div`
    width: 90%;
    height: 65vh;
    margin: auto;
    border-radius: 5px;
    background-color: white;
    position: relative;
`;

export const ContentRegisters = styled.div`
    width: 95%;
    height: auto;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
`;

export const RowActions = styled.div`
    display: flex;
    width: 90%;
    margin: auto;
    box-sizing: border-box;
    padding-top: 10px;
    justify-content: space-between;
`;

export const SingleAction = styled.div`
    width: 40%;
    height: 15vh;
    border-radius: 5px;
    background-color: rgb(163, 40, 214);
    position: relative;
`;

export const WrapperSingleAction = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const SingleActionComponent = styled.div`
    position: absolute;
    ${props => props.type === 'icon' ? 'top: 0; color: white; font-size: 22px;' : 'bottom: 0;'}
    left: 0;
    box-sizing: border-box;
    padding: 5px;
`;

export const SubtitleAction = styled.p`
    font-size: 15px;
    color: white;
    width: 60%;
    word-wrap: break-word;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-weight: bold;
`;

export const RegisterData = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const SingleRegisterData = styled.p`
    font-size: 15px;
    padding: 5px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    ${props => (props.type === 'date' || props.type === 'value') 
        ? 'width: 20%;' 
        : 'width: 80%;'
    }
    ${props => props.type === 'value' 
        ? props.isCredit 
            ? 'color: rgb(3, 172, 0);' 
            : 'color: rgb(199, 0, 0);' 
        : props.type === 'date'
            ? 'color: rgba(0, 0, 0, 0.3);'
            : 'color: black;'
    }
`;

export const Balance = styled.div`
    width: 95%;
    position: absolute;
    bottom: 5px;
    left: 2.5%;
    box-sizing: border-box;
    display: flex;
`;
 
export const BalanceData = styled.p`
    font-family: "Raleway", sans-serif;
    ${props => props.type === 'text'
        ? 'font-weight: bolder; width: 80%;'
        : 'font-weight: bold; width: 20%;'
    }
`; 