import { Dispatch, SetStateAction } from "react";

import useAxios from "./use-axios";

import EventProps from "../types/event-props";

interface EventResponse extends Omit<EventProps, "id"> {
    _id: string
}

type useGetEventsProps = {
    setLoading: Dispatch<SetStateAction<boolean>>,
    setEvents: Dispatch<SetStateAction<Array<EventProps>>>,
    setError: Dispatch<React.SetStateAction<any>>
}

const useGetEvents = ({ setError, setLoading, setEvents }: useGetEventsProps) => {

    const { sendRequest } = useAxios();

    const handler = async () => {

        const { data, error } = await sendRequest({
            url: `${import.meta.env.VITE_CRUDCRUD_URL}/events`,
            method: "get",
            headers: { accept: 'application/json' }
        })

        if (error) {
            setError("Não foi possível obter os eventos...");
            console.log("O erro que ocorreu:", error);

            setLoading(false);

            return;
        }

        setEvents(data.map((event: EventResponse) => {
            return {
                id: event._id,
                name: event.name,
                date: event.date,
                expectedPublic: event.expectedPublic,
                description: event.description,
                subscribed: event.subscribed,
            }
        }));

        setLoading(false);
    }

    return handler;
}

export default useGetEvents;