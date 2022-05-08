import { useNavigate } from "react-router";
import { RegisterData, SingleRegisterData } from "../../assets/styled/home/StyledHome";
import unlinkRegister from "../../utils/unlinkRegisterRequest";
export default function SingleRegister({item, registerId}) {
    const navigate = useNavigate();
    async function unlink(){
        try{
            const { token } = JSON.parse(localStorage.getItem('loginData'));
            const response = await unlinkRegister({headers: {...token}, registerId});
            if(response.status < 400){
                alert('aeeehh');
                window.location.reload();
            }else{
                alert('algum erro ocorreu.');
            }
        }catch(e){
            console.log(e.message);
        }
    }
    function updateRegister(){
        const type = item.type === 1 ? 'entrada' : 'saída';
        const registerData = {
            registerId,
            value: item.value,
            description: item.description
        };
        localStorage.setItem('registerData', JSON.stringify(registerData));
        navigate(`/update/${type}`);
    }
    return (
        <RegisterData>
            <SingleRegisterData type='date'>{item.date}</SingleRegisterData>
            <SingleRegisterData type='description' onClick={updateRegister}>
                {item.description}
            </SingleRegisterData>
            <SingleRegisterData type='value' isCredit={item.type}>
                {item.value}
            </SingleRegisterData>
            <ion-icon name="close-outline" onClick={unlink}></ion-icon>
        </RegisterData>
    );
}