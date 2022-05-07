import { Background, ContainerFormLogin, RowCreateAcc, CreateAcc } from "../assets/styled/login/StyledLogin";
import { Link } from "react-router-dom";
import RowTitlePage from "./components/RowTitlePage";
import SignUpCard from "./components/SignUpCard";
export default function SignUp(){
    return (
        <Background>
            <ContainerFormLogin>
                <RowTitlePage />
                <SignUpCard />
                <RowCreateAcc>
                    <Link to='/'>
                        <CreateAcc>Já tem uma conta? Entre agora!</CreateAcc>
                    </Link>
                </RowCreateAcc>
            </ContainerFormLogin>
        </Background>
    );
}