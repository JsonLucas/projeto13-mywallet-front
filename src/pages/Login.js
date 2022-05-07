import {
    Background,
    ContainerFormLogin,
    RowCreateAcc,
    CreateAcc,
} from "../assets/styled/login/StyledLogin";
import LoginCard from "./components/LoginCard";
import { Link } from 'react-router-dom';
import RowTitlePage from "./components/RowTitlePage";
export default function Login() {
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
