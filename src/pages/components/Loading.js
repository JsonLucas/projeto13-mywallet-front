import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';
export default function Loading(){
    return (
        <ContainerIcon>
            <Icon>
                <ThreeDots color='rgb(82, 182, 255)' height='100' width='100' />
            </Icon>
        </ContainerIcon>
    );
}

const ContainerIcon = styled.div`
    display: table;
    width: 100%;
`;
const Icon = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    div{
        width: 100px;
        margin: auto;
    }
`;
