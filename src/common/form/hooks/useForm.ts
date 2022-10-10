import { useContext } from 'react';
import { FormContext } from '../FormProvider';

export const useForm = () => {
    const form = useContext(FormContext);

    return form;
};