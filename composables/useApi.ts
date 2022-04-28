import { UseFetchOptions } from "nuxt/app";
import {H3Error, createError} from  'h3';

export const useApi = async (path: string) => {
  const options: UseFetchOptions<any> = {
    baseURL: 'https://httpbin.org',
  }
  const response = await $fetch.raw(path, options).catch(e => e.data);
  let data
  if (response && response.ok) {
    data = response._data;
  }
  else {
    let partial = response;
    if (typeof response === "string") {
      partial = {
        statusMessage: response
      };
    }
    const error: H3Error = createError(partial);
    error.statusCode = 500;
    error.statusMessage = response;
    data = error;

  }
  return data;
}
