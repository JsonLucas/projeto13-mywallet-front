import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ActionFields, ContainerFields, SingleActionField } from "../assets/styled/actions/StyledActions";
import { Background, Field } from "../assets/styled/login/StyledLogin";
import { newMovimentation } from "../utils/movimentationRequest";
import RowSubtitles from "./components/RowSubtitles";

export default function NewAction(){
    const { actionType } = useParams();
    const [value, setValue] = useState(null);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
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
            console.log(response);
        }catch(e){
            console.log(e.message);
        }
        setValue(0);
        setDescription('');
    }
    return (
        <Background>
            <RowSubtitles text={`Nova ${actionType}`} type='subtitle'/>
            <RowSubtitles text='Voltar' type='navigation'/>
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