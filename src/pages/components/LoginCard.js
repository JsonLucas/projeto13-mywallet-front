import { useState } from "react";
import { useNavigate } from "react-router";
import {
    CardFormLogin,
    LoginFields,
    Field,
} from "../../assets/styled/login/StyledLogin";
import loginRequest from "../../utils/loginRequest";
export default function LoginCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function login(e){
        e.preventDefault();
        try{
            const body = {
                email: email,
                password: password
            }
            const response = await loginRequest(body);
            if(response.status === 200){
                alert('login efetuado com sucesso.');
                const loginToken = {authorization: `Bearer ${response.data.token}`}
                localStorage.setItem('loginToken', JSON.stringify(loginToken));
                navigate(`/home/${response.data.name}`);
            }else{
                alert(response.data);
            }
        }catch(e){
            console.log(e.message);
        }
        setEmail('');
        setPassword('');
    }
    return (
        <CardFormLogin onSubmit={login}>
            <LoginFields>
                <Field type="email" placeholder="Email" value={email} 
                onChange={(e) => { setEmail(e.target.value) }} required />
            </LoginFields>
            <LoginFields>
                <Field type="password" placeholder="Senha" value={password}
                onChange={(e) => { setPassword(e.target.value) }} required />
            </LoginFields>
            <LoginFields>
                <Field type="submit" value="Enviar"/>
            </LoginFields>
        </CardFormLogin>
    );
}
