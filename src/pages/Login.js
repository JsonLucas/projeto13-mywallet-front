import {
    Background,
    ContainerFormLogin,
    RowCreateAcc,
    CreateAcc,
} from "../assets/styled/login/StyledLogin";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import RowTitlePage from "./components/RowTitlePage";
import LoginCard from "./components/LoginCard";
export default function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        try{
            const loginData = JSON.parse(localStorage.getItem('loginData'));
            if(loginData){
                navigate(`/home/${loginData.username}`);
            } // dar um get aki pr aver se esse token tá salvo, caso esteja, permitir o login
        }catch(e){
            console.log(e.message);
        }
    }, []);
    return (
        <Background>
            <ContainerFormLogin>
                <RowTitlePage />
                <LoginCard />
                <RowCreateAcc>
                    <Link to='/sign-up'>
                        <CreateAcc>Primeira vez? Cadastre-se!</CreateAcc>
                    </Link>
                </RowCreateAcc>
            </ContainerFormLogin>
        </Background>
    );
}
