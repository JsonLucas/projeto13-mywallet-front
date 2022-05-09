import { useEffect } from 'react';
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import { Background } from "../assets/styled/login/StyledLogin";
import activeSession from '../utils/activeSessionRequest';
import HomeActions from "./components/HomeActions";
import HomeRegisters from "./components/HomeRegisters";
import RowSubtitles from "./components/RowSubtitles";

export default function Home(){
    const { name } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        async function verifyActiveSession(){
            if(!await hasActiveSession()){
                navigate('/');
            }
        }
        verifyActiveSession();
    }, []);
    return (
        <Background>
            <RowSubtitles text={`Olá, ${name}.`} page='home' />
            <HomeRegisters />
            <HomeActions />
        </Background>
    );
}

export async function hasActiveSession(){
    try{
        const { token } = JSON.parse(localStorage.getItem('loginData'));
        const response = await activeSession({headers: {...token}});
        if(response.status < 400){
            return true;
        }
        alert(response.data);
        return false;
    }catch(e){
        console.log(e.message);
    }
    return false;
}