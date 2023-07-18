import axios from "axios";

type FetchProps = {
  url: string,
  method: "get" | "post" | "put" | "delete" | "patch",
  payload?: object,
  headers?: object
}

const useAxios = () => {

  const sendRequest = async ({url, method, payload = {}, headers = { accept: '*/*' }}: FetchProps) => {
      try {  
        const result = await axios[method](url, payload, headers);
        return { data: result.data, error: null};
      } catch (error) {
        return { data: null, error};
      }
  }

  return {
    sendRequest
  };
};

export default useAxios;