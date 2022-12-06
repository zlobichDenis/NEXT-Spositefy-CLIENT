import { createContext, useCallback, useState } from 'react';

export const FormContext = createContext({} as any);

export const FormProvider = ({ initialValues, onSubmit, children }) => {
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = useCallback((inputName: string, value: any) => {
        const isExistingKey = Object.keys(formValues).includes(inputName);

        if (!isExistingKey) {
            return;
        }

        setFormValues((prevState) => ({ ...prevState, inputName: value }));
    }, [formValues]);

    const reset = useCallback(() => {
        setFormValues(initialValues);
    }, [initialValues]);

    const form = {
        formValues,
        handleChange,
        onSubmit,
        reset,
    };

    return (
        <FormContext.Provider value={form}>
            {children}
        </FormContext.Provider>
    )
};