import { useParams } from "react-router";
import { ActionFields, ContainerFields, SingleActionField } from "../assets/styled/actions/StyledActions";
import { Background, Field } from "../assets/styled/login/StyledLogin";
import RowSubtitles from "./components/RowSubtitles";

export default function NewAction(){
    const { actionType } = useParams();
    return (
        <Background>
            <RowSubtitles text={`Nova ${actionType}`} />
            <ContainerFields>
                <ActionFields>
                    <SingleActionField>
                        <Field placeholder="Valor" type='number' />
                    </SingleActionField>
                    <SingleActionField>
                        <Field placeholder="Descrição" type='text' />
                    </SingleActionField>
                    <SingleActionField>
                        <Field value={`Salvar ${actionType}`} type='button' />
                    </SingleActionField>
                </ActionFields>
            </ContainerFields>
        </Background>
    );
}