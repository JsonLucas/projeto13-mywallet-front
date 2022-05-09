import { Fragment, useEffect, useState } from "react";
import {
    Balance, BalanceData, ContentRegisters, RegisterData, Registers,
    SingleRegisterData
} from "../../assets/styled/home/StyledHome";
import { useNavigate } from "react-router";
import { hasActiveSession } from "../Home";
import getBalance from "../../utils/balanceRequest";
import registersRequest from "../../utils/registersRequest";
import SingleRegister from "./SingleRegister";
export default function HomeRegisters() {
    const [registers, setRegisters] = useState([]);
    const [userBalance, setUserBalance] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        async function verifyActiveSession(){
            if(!await hasActiveSession()){
                navigate('/');
            }else{
                getRegisters();
            }
        }
        async function getRegisters(){
            try{
                const { token } = JSON.parse(localStorage.getItem('loginData'));
                const responseRegisters = await registersRequest({ headers: {...token} });
                if (responseRegisters.status < 400) {
                    const balance = await getBalance({ headers: {...token} });
                    if (balance.status < 400) {
                        setLoaded(true);
                        setRegisters(responseRegisters.data);
                        setUserBalance(balance.data.balance);
                    }
                }
            }catch(e){
                console.log(e.message);
            }
        }
        verifyActiveSession();
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
                    </Balance>
                }
            </Fragment>
        </Registers>
    );
}