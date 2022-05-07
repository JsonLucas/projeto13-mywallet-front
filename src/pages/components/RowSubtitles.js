import { RowSubtitlePage, SubtitlePage } from "../../assets/styled/home/StyledHome";
export default function RowSubtitles({text}) {
    return (
        <RowSubtitlePage>
            <SubtitlePage type='text'>{text}</SubtitlePage>
            <SubtitlePage type='icon'><ion-icon name="log-out-outline"></ion-icon></SubtitlePage>
        </RowSubtitlePage>
    );
}