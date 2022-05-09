import { useEffect, useState } from "react";
import { newMovimentation } from "../utils/movimentationRequest";
import { hasActiveSession } from "./Home";
import { Background, Field } from "../assets/styled/login/StyledLogin";
import { useNavigate, useParams } from "react-router";
import { ActionFields, ContainerFields, SingleActionField } from "../assets/styled/actions/StyledActions";
import RowSubtitles from "./components/RowSubtitles";

export default function NewAction(){
    const { actionType } = useParams();
    const [value, setValue] = useState(undefined);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        async function verifyActiveSession(){
            if(!await hasActiveSession()){
                navigate('/');
            }
        }
        verifyActiveSession();
    }, []);
    async function newAction(e){
        e.preventDefault();
        const type = actionType === 'entrada' ? 1 : 0;
        const body = {
            value: value,
            description: description,
            type: type
        }
        try{
            const { token, name } = JSON.parse(localStorage.getItem('loginData'));
            const response = await newMovimentation(body, {headers: token});
            if(response.status < 400){
                if(!window.confirm('movimentação feita com sucesso, deseja fazer outra movimentação?')){
                    navigate(`/home/${name}`);
                }
            }else{
                alert(response.data);
                navigate('/');
            }
        }catch(e){
            console.log(e.message);
        }
        setValue('');
        setDescription('');
    }
    return (
        <Background>
            <RowSubtitles text={`Nova ${actionType}`} type='subtitle'/>
            <ContainerFields>
                <ActionFields onSubmit={newAction}>
                    <SingleActionField>
                        <Field placeholder="Valor" type='number' value={value} 
                        onChange={(e) => { setValue(e.target.value); }} required />
                    </SingleActionField>
                    <SingleActionField>
                        <Field placeholder="Descrição" type='text' value={description}
                        onChange={(e) => { setDescription(e.target.value); }} />
                    </SingleActionField>
                    <SingleActionField>
                        <Field value={`Salvar ${actionType}`} type='submit' />
                    </SingleActionField>
                </ActionFields>
            </ContainerFields>
        </Background>
    );
}