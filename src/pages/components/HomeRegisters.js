import { Fragment, useEffect, useState } from "react";
import { Balance, BalanceData, ContentRegisters, RegisterData, Registers, 
    SingleRegisterData } from "../../assets/styled/home/StyledHome";
import registersRequest from "../../utils/registersRequest";
export default function HomeRegisters() {
    const [registers, setRegisters] = useState([]);
    useEffect(() => {
        async function queryRegisters(){
            try{
                const token = JSON.parse(localStorage.getItem('loginToken'));
                const response = await registersRequest(token);
                setRegisters(response);
            }catch(e){
                console.log(e.message);
            }
        }
        queryRegisters();
    }, []);
    return (
        <Registers>
            <ContentRegisters>
                {registers === [] &&
                <RegisterData><SingleRegisterData>Nenhum dado</SingleRegisterData></RegisterData>}
                {registers.length !== 0 && <Fragment>
                <RegisterData>
                    <SingleRegisterData type='date'>date</SingleRegisterData>
                    <SingleRegisterData type='description'>desc</SingleRegisterData>
                    <SingleRegisterData type='value' isCredit={true}>value</SingleRegisterData>
                </RegisterData>
                <RegisterData>
                    <SingleRegisterData type='date'>date</SingleRegisterData>
                    <SingleRegisterData type='description'>desc</SingleRegisterData>
                    <SingleRegisterData type='value' isCredit={false}>value</SingleRegisterData>
                </RegisterData></Fragment>}
            </ContentRegisters>
            <Balance>
                <BalanceData type='text'>SALDO</BalanceData>
                <BalanceData type='value'>value</BalanceData>
            </Balance>
        </Registers>
    );
}