import { forwardRef } from "react";

import { useForm } from "react-hook-form";

import Button from "../../components/button";
import Input from "../../components/input";

import "./style.scss";
import TextArea from "../../components/text-area";

type FormValues = {

}

const RegisterEvent = () => {

    

    const { register, formState: { errors }, handleSubmit } = useForm<FormValues>({
        reValidateMode: "onChange"
    });

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

                <form className="content__form" onSubmit={handleSubmit(() => {})}>

                    <Input name="Nome"/>
                    <Input name="Data de Início" type="date"/>
                    <TextArea name="Descrição" required={false}/>

                    <Button text="Anunciar" type="button-primary" primaryType="--anunciante" handleClick={() => { }} />
                </form>

            </section>
        </main>
    );
}

export default RegisterEvent;