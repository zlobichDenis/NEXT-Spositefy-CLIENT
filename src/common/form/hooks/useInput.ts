import { useForm } from './useForm';
import { useCallback } from 'react';

export const useInput = (name: string) => {
    const { handleChange, formValues } = useForm();

    const onChange = useCallback((event) => {
        if (event.target.files?.length) {
            handleChange(name, event.target.files[0]);
        } else {
            handleChange(name, event.target.value);
        }
    }, [handleChange, name]);

    return {
        value: formValues[name],
        onChange,
    };
};