import { forwardRef } from "react";

import { useForm } from "react-hook-form";

import Button from "../../components/button";
import Input from "../../components/input";

import "./style.scss";

// const InputsChildren = forwardRef((props, ref) => {
//     return (
//         <>
//             <Input name="Nome" />
//             <Input name="Data de Início" type="date" />
//             <Input name="Descrição" type="textarea" required={false} />
//         </>
//     );
// })

const RegisterEvent = () => {

    const { register } = useForm({
        defaultValues: {
            Nome: "Evento Top",
            ["Data de Início"]: "2023-08-10",
            ["Descrição"]: "Vai ser muito bom!"
        }
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

                <form className="content__form">

                    <Input name="Nome" />
                    <Input name="Data de Início" type="date" />
                    <Input name="Descrição" type="textarea" required={false} />

                    <Button text="Anunciar" type="button-primary" primaryType="--anunciante" handleClick={() => { }} />
                </form>

            </section>
        </main>
    );
}

export default RegisterEvent;