import { useNavigate } from "react-router";
import { RowSubtitlePage, SubtitlePage } from "../../assets/styled/home/StyledHome";
import unlinkSession from "../../utils/unlinkSessionRequest";
export default function RowSubtitles({text, page}) {
    const navigate = useNavigate();
    async function logout(e){
        try{
            const { token } = JSON.parse(localStorage.getItem('loginData'));
            if(window.confirm('tem certeza que deseja sair?')){
                const response = await unlinkSession({headers: token});
                alert(response.data);
                localStorage.removeItem('loginData');
                navigate('/');
            }
        }catch(e){
            console.log(e.message);
            navigate('/');
        }
    }
    function back(){
        navigate(-1);
    }
    return (
        <RowSubtitlePage>
            <SubtitlePage type='text'>{text}</SubtitlePage>
            {page === 'home' && 
                <SubtitlePage type='icon' onClick={logout}>
                    <ion-icon name="log-out-outline"></ion-icon>
                </SubtitlePage> 
            }
            {page !== 'home' && 
            <SubtitlePage type='icon' onClick={back}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </SubtitlePage> 
            }
        </RowSubtitlePage>
    );
}