import React, {useState} from "react";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";

const ChatForm = (props) => {

    const [question, setQuestion] = useState();
    const [response, setResponse] = useState();

    const setQuestionInField = e => {
        setQuestion(e);
    }

    const submitQuestion = () => {
        // Call to GPT
        setResponse("Bonjour, bienvenue sur ChatGPT");
    }



    return <div className={'w-max'}>

        <InputTextarea onChange={event => setQuestionInField(event)} cols="50" className={' block'} />
        <Button className={'mt-2'} onClick={submitQuestion}>Valider</Button>
        <div className={response ? 'visible rounded-xl bg-blue-900 text-white text-right pr-3' : 'invisible'} >Web Dev Bot:<br/>
            {response}
        </div>

    </div>
}

export default ChatForm;
