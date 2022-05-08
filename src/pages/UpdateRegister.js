import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ActionFields, ContainerFields, SingleActionField } from "../assets/styled/actions/StyledActions";
import { Background, Field } from "../assets/styled/login/StyledLogin";
import { updateMovimentation } from "../utils/movimentationRequest";
import RowSubtitles from "./components/RowSubtitles";

export default function UpdateRegister(){
    const previousValues = JSON.parse(localStorage.getItem('registerData'));
    const { actionType } = useParams();
    const [value, setValue] = useState(previousValues.value);
    const [description, setDescription] = useState(previousValues.description);
    const navigate = useNavigate();
    async function newAction(e){
        e.preventDefault();
        const type = actionType === 'entrada' ? 1 : 0;
        const { registerId } = previousValues;
        const body = {
            value: value,
            description: description,
            type: type
        }
        try{
            const { token, name } = JSON.parse(localStorage.getItem('loginData'));
            const response = await updateMovimentation(body, {headers: {...token, registerId}});
            if(response.status < 400){
                alert('alteração feita com sucesso.');
                navigate(`/home/${name}`);
            }else{
                alert(response.data);
                navigate('/');
            }
        }catch(e){
            console.log(e.message);
        }
    }
    return (
        <Background>
            <RowSubtitles text={`Editar ${actionType}`} type='subtitle'/>
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
                        <Field value={`Atualizar ${actionType}`} type='submit' />
                    </SingleActionField>
                </ActionFields>
            </ContainerFields>
        </Background>
    );
}