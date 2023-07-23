import { useRef, FormEvent, useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import useAxios from "../../hooks/use-axios";

import EventProps from "../../types/event-props";

import Loading from "../../components/loading";
import TextArea from "../../components/text-area";
import Button from "../../components/button";
import Input from "../../components/input";

import "./style.scss";

interface FormEventValues extends Omit<EventProps, "id"> { }

const UpdateEvent = () => {

    const location = useLocation();
    const state = location.state as EventProps;

    const navigate = useNavigate();

    const { sendRequest } = useAxios();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    // const notification = useRef<HTMLDivElement>(null);

    const nameInput = useRef<HTMLInputElement>(null);
    const dateInput = useRef<HTMLInputElement>(null);
    const expectedPublicInput = useRef<HTMLInputElement>(null);
    const descriptionInput = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (!nameInput?.current || !dateInput?.current || !descriptionInput?.current || !expectedPublicInput?.current) {
            setError("Há campos sem valor!");
            return;
        }

        nameInput.current.value = state.name;
        dateInput.current.value = new Date(state.date).toISOString().split('T')[0];
        expectedPublicInput.current.value = state.expectedPublic.toString();
        descriptionInput.current.value = state.description ?? "";

        console.log(dateInput.current.value);
        
    }, [])

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!nameInput?.current || !dateInput?.current || !descriptionInput?.current || !expectedPublicInput?.current) {
            setError("Há campos sem valor!");
            return;
        }

        setLoading(true);

        const requestBody: FormEventValues = {
            name: nameInput.current.value,
            date: new Date(dateInput.current.value),
            expectedPublic: Number(expectedPublicInput.current.value),
            description: descriptionInput.current.value,
            subscribed: false
        }

        if (!requestBody.name || !requestBody.date) {
            setError("Há campos sem valor!");

            setLoading(false);
            return;
        }

        console.log(requestBody);

        const { data, error } = await sendRequest({
            url: `${import.meta.env.VITE_CRUDCRUD_URL}/events/${state.id}`,
            method: "put",
            payload: requestBody,
        });

        if (error) {
            setError("Não foi possível atualizar o evento...");
            console.log("O erro que ocorreu:", error);

            setLoading(false);
            return;
        }

        setLoading(false);

        navigate(-1);

        console.log("data", data);
    }

    return (
        <main className="update-event">
            {/* <header className="update-event__header">
                <span className="header__go-back">Voltar</span>
            </header> */}

            {loading ? <Loading /> : null}
            {error ? <h1>{error}</h1> : null}

            <section className="update-event__content">

                <section className="content__title">
                    <h1>Anuncie Agora!</h1>
                    <p>Cadastre o seu próximo evento</p>
                </section>

                <form className="content__form" onSubmit={(e) => onSubmit(e)}>

                    <Input label="Nome *" ref={nameInput} />
                    <Input label="Data de Início *" type="date" ref={dateInput} />
                    <Input label="Público Esperado *" type="number" ref={expectedPublicInput} />
                    <TextArea label="Descrição" required={false} ref={descriptionInput} />

                    <Button text="Anunciar" type="button-primary" primaryType="--anunciante" />
                </form>

            </section>
        </main>
    );
}

export default UpdateEvent;