import { Fragment, useEffect, useState } from "react";
import {
    Balance, BalanceData, ContentRegisters, RegisterData, Registers,
    SingleRegisterData
} from "../../assets/styled/home/StyledHome";
import getBalance from "../../utils/balanceRequest";
import registersRequest from "../../utils/registersRequest";
import SingleRegister from "./SingleRegister";
export default function HomeRegisters() {
    const [registers, setRegisters] = useState([]);
    const [userBalance, setUserBalance] = useState(0);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        async function queryRegisters() {
            try {
                const { token } = JSON.parse(localStorage.getItem('loginData'));
                const response = await registersRequest({ headers: token });
                if(response.status < 400){
                    const balance = await getBalance({headers: token});
                    if(balance.status < 400){
                        setLoaded(true);
                        setRegisters(response.data);
                        setUserBalance(balance.data.balance);
                    }
                }
            } catch (e) {
                console.log(e.message);
            }
        }
        queryRegisters();
    }, []);
    return (
        <Registers>
            <Fragment>
                <ContentRegisters>
                    {!loaded &&
                        <RegisterData>
                            <SingleRegisterData>Carregando. . .</SingleRegisterData>
                        </RegisterData>}
                    {loaded &&
                        <Fragment>
                            {registers.map((item) =>
                                <SingleRegister key={item._id} item={item} registerId={item._id} />
                            )}
                        </Fragment>
                    }
                </ContentRegisters>
                {loaded && 
                <Balance>
                    <BalanceData type='text'>SALDO</BalanceData>
                    <BalanceData type='value'>{userBalance}</BalanceData>
                </Balance>}
            </Fragment>
        </Registers>
    );
}