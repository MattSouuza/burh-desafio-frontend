import { useState, useEffect, useCallback } from "react";
import axios from "axios";

type FetchProps = {
  url: string,
  method: "get" | "post" | "put" | "delete" | "patch",
  payload?: object,
  headers?: object
}

const useAxios = () => {

  const sendRequest = async ({url, method, payload = {}, headers = { accept: '*/*' }}: FetchProps) => {

      console.log("useAxios", payload);

      try {  
        const result = await axios[method](url, payload, headers);
        return { data: result.data, error: null};
      } catch (error) {
        return { data: null, error};
      }
  }

  // useEffect(() => {
  //   if (fetchWhenCalled) {
  //     fetch();
  //   }
  // }, [fetch]);

  return {
    sendRequest
  };
};

export default useAxios;