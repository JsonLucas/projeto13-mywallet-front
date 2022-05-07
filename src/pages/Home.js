import { useParams } from "react-router";
import { Background } from "../assets/styled/login/StyledLogin";
import HomeActions from "./components/HomeActions";
import HomeRegisters from "./components/HomeRegisters";
import RowSubtitles from "./components/RowSubtitles";

export default function Home(){
    const { name } = useParams();
    return (
        <Background>
            <RowSubtitles text={`Olá, ${name}.`} />
            <HomeRegisters />
            <HomeActions />
        </Background>
    );
}