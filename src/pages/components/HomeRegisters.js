import { Fragment, useEffect, useState } from "react";
import {
    Balance, BalanceData, ContentRegisters, RegisterData, Registers,
    SingleRegisterData
} from "../../assets/styled/home/StyledHome";
import registersRequest from "../../utils/registersRequest";
import SingleRegister from "./SingleRegister";
export default function HomeRegisters() {
    const [registers, setRegisters] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        async function queryRegisters() {
            try {
                const { token } = JSON.parse(localStorage.getItem('loginData'));
                const response = await registersRequest({ headers: token });
                if(response.status < 400){
                    setLoaded(true);
                    setRegisters(response.data);
                }
            } catch (e) {
                console.log(e.message);
            }
        }
        queryRegisters();
    }, []);
    return (
        <Registers>
            <ContentRegisters>
                {!loaded &&
                    <RegisterData>
                        <SingleRegisterData>Nenhum dado encontradao</SingleRegisterData>
                    </RegisterData>}
                {loaded &&
                    <Fragment>
                        {registers.map((item) =>
                            <SingleRegister item={item} registerId={item._id} />
                        )}
                    </Fragment>
                }
            </ContentRegisters>
            <Balance>
                <BalanceData type='text'>SALDO</BalanceData>
                <BalanceData type='value'>value</BalanceData>
            </Balance>
        </Registers>
    );
}