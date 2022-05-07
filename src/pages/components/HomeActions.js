import { RowActions, SingleAction, SingleActionComponent, SubtitleAction, WrapperSingleAction }
    from "../../assets/styled/home/StyledHome";
import { Link } from 'react-router-dom';
export default function HomeActions() {
    return (
        <RowActions>
            <SingleAction>
                <Link to={`/new-action/${'entrada'}`}>
                    <WrapperSingleAction>
                        <SingleActionComponent type='icon'>
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </SingleActionComponent>
                        <SingleActionComponent type='subtitle'>
                            <SubtitleAction>Nova entrada</SubtitleAction>
                        </SingleActionComponent>
                    </WrapperSingleAction>
                </Link>
            </SingleAction>
            <SingleAction>
                <Link to={`/new-action/${'saída'}`}>
                    <WrapperSingleAction>
                        <SingleActionComponent type='icon'>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                        </SingleActionComponent>
                        <SingleActionComponent type='subtitle'>
                            <SubtitleAction>Nova saída</SubtitleAction>
                        </SingleActionComponent>
                    </WrapperSingleAction>
                </Link>
            </SingleAction>
        </RowActions>
    );
}