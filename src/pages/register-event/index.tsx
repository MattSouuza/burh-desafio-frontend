import { useRef, FormEvent } from "react";

import TextArea from "../../components/text-area";
import Button from "../../components/button";
import Input from "../../components/input";

import "./style.scss";

type FormEventValues = {
    name: string,
    date: string | Date,
    description: string,
}

const RegisterEvent = () => {

    const nameInput = useRef<HTMLInputElement>(null);
    const dateInput = useRef<HTMLInputElement>(null);
    const descriptionInput = useRef<HTMLTextAreaElement>(null);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!nameInput?.current || !dateInput?.current || !descriptionInput?.current) {
            return false;
        }

        const requestBody: FormEventValues = {
            name: nameInput.current.value,
            date: dateInput.current.value,
            description: descriptionInput.current.value
        }      
        
        console.log(requestBody);
    }

    return (
        <main className="register-event">
            <header className="register-event__header">
                <span className="header__go-back">Voltar</span>
            </header>

            <section className="register-event__content">

                <section className="content__title">
                    <h1>Anuncie Agora!</h1>
                    <p>Cadastre o seu próximo evento</p>
                </section>

                <form className="content__form" onSubmit={(e) => onSubmit(e)}>

                    <Input label="Nome" ref={nameInput}/>
                    <Input label="Data de Início" type="date" ref={dateInput}/>
                    <TextArea label="Descrição" required={false} ref={descriptionInput}/>

                    <Button text="Anunciar" type="button-primary" primaryType="--anunciante" />
                </form>

            </section>
        </main>
    );
}

export default RegisterEvent;