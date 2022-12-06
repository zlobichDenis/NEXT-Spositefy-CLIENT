import { AxiosErrorSerialized } from 'axios';

export type ReduxState = 'initial' | 'pending' | 'fulfilled' | 'rejected';
export type ReduxError = AxiosErrorSerialized;