
import './App.css';
import {useState} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import ChatForm from "./ChatForm/ChatForm";


function App() {
    const [inputData, setInputData] = useState();
    const [logged, setLogged] = useState(false);

    const setValue = e => {
        setInputData(e);
    }

    const setUserLogged = () => {
        setLogged(true);
    }


  return (
      <div className={' p-6 text-black bg-blue-300'}>
        <div className="p-6 max-w mx-auto bg-white rounded-xl shadow-lg">
            <div className="text-xl font-medium text-black text-center">Web Dev AI</div>
            {!logged ?
                <div >
                <p>Veuillez entrer votre nom d'utilisateur : </p>
                <InputText className='mt-2 mb-2' value={inputData} onChange={event => setValue(event.target.value)}/>
                <Button className='' onClick={setUserLogged}>Valider</Button>
            </div>
                :
                <div className={'mx-auto text-center w-max'}>
                    <p className="text-slate-500">Bienvenue sur votre espace de chat {inputData}. Veuillez poser votre question ci-dessous.</p>
                </div>
            }


            <ChatForm />

        </div>
      </div>
  );
}
export default App;
