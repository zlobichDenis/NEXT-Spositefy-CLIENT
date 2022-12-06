import axios, {
    AxiosInstance,
    AxiosErrorSerialized,
    AxiosPromise,
    AxiosRequestConfig,
    AxiosError,
} from 'axios';
import pickBy from 'lodash/pickBy';
import queryString from 'query-string';

import { config } from 'config';

declare module 'axios' {
    export interface AxiosErrorSerialized<T = any> {
        response: {
            data?: T;
            status?: number;
        },
        message: string;
    }

    export interface AxiosError {
        serialize: () => AxiosErrorSerialized;
    }
}

type HttpClientGlobalConfig = {
    headers: { [key: string]: string };
};

const httpClientGlobalConfig: HttpClientGlobalConfig = {
    headers: {},
};

class HttpClient {
    private baseURL: string;

    private API: AxiosInstance;

    baseHeaders: { [key: string]: string } = {};

    constructor(obj: { API: AxiosInstance, baseURL: string }) {
        this.baseURL = obj.baseURL || 'http://localhost:5000/';
        this.API = obj.API;

        this.API.interceptors.response.use(
            (res) => res,
            (err) => {
                err.code = err.response && err.response.status.toString();

                err.serialize = this.serializeError.bind(null, err);
                throw err;
            },
        );
    }

    serializeError = (err: AxiosError): AxiosErrorSerialized => ({
        response: {
            data: err.response?.data,
            status: err.response?.status,
        },
        message: err.message,
    });

    getInterceptors = () => this.API.interceptors;

    get<T = any, Params extends object = object>(
        url: string,
        params?: Params,
        config: AxiosRequestConfig = {},
    ): AxiosPromise<T> {
        return this.request({
            ...config,
            url,
            method: 'GET',
            params,
        });
    }

    post<T = any>(
        url: string,
        data?: object,
        config?: AxiosRequestConfig,
    ): AxiosPromise<T> {
        return this.request({ ...config, url, method: 'POST', data });
    }

    put<T = any>(
        url: string,
        data?: object,
        config?: AxiosRequestConfig,
    ): AxiosPromise<T> {
        return this.request({ ...config, url, method: 'PUT', data });
    }

    patch = <T extends {} = any>(
        url: string,
        data?: object,
        config?: AxiosRequestConfig,
    ): AxiosPromise<T> => this.request({
        ...config,
        url,
        data,
        method: 'PATCH',
    });

    delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
        return this.request({ ...config, url, method: 'DELETE' });
    }

    paramsSerializer = (_params: { [key: string]: unknown }): string => {
        const params = pickBy(_params, (val) => !!val || val === 0 || val === false);
        return queryString.stringify(params as any);
    };

    private isWithBaseURL = (url: string): boolean => url.startsWith('http');

    request = (_obj: AxiosRequestConfig) => {
        const obj = _obj;
        const { url = '' } = obj;

        obj.paramsSerializer = this.paramsSerializer;

        obj.headers = {
            ...httpClientGlobalConfig.headers,
            ...obj.headers,
        };

        const currentUrl = this.isWithBaseURL(url) ? url : this.baseURL + url;

        return this.API({ ...obj, url: currentUrl });
    };
}

const httpClient = new HttpClient({
    baseURL: `${config.api.basePath}`,
    API: axios.create(),
});

export { HttpClient, httpClientGlobalConfig, httpClient };