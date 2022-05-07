import {
    CardFormLogin,
    LoginFields,
    Field,
    IsEqual
} from "../../assets/styled/login/StyledLogin";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signUp from "../../utils/signUpRequest";
export default function SignUpCard() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();
    async function actionSignUp(e){
        e.preventDefault();
        const body = {name, email, password};
        const request = await signUp(body);
        if(request.status < 400){
            alert(request.data);
            navigate('/');
        }else{
            alert(request.data);
        }
    }
    return (
        <CardFormLogin onSubmit={actionSignUp}>
            <LoginFields>
                <Field type="text" placeholder="Nome" value={name} 
                onChange={(e) => { setName(e.target.value) }} required />
            </LoginFields>
            <LoginFields>
                <Field type="email" placeholder="Email" value={email} 
                onChange={(e) => { setEmail(e.target.value) }} required />
            </LoginFields>
            <LoginFields>
                <Field type="password" placeholder="Senha" value={password} 
                onChange={(e) => { setPassword(e.target.value) }} required />
            </LoginFields>
            <LoginFields>
                <Field type="password" placeholder="Confirme a senha" value={confirmPass} 
                 onChange={(e) => { setConfirmPass(e.target.value) }} required />
            </LoginFields>
            <LoginFields>
                {confirmPass === '' && <></>}
                {((confirmPass !== password) && (confirmPass !== '')) && 
                <IsEqual>
                    <ion-icon name="alert-circle"></ion-icon>
                    As senhas devem ser iguais
                </IsEqual>}
            </LoginFields>
            <LoginFields>
                <Field type="submit" value="Enviar" />
            </LoginFields>
        </CardFormLogin>
    );
}
