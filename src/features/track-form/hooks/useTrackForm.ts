import { useCallback, useState } from 'react';

import { TRACK_FORM_INITIAL_STEP } from '../constants';
import { useForm } from '../../../common';
import { CreateTrackDto } from '../../../api/types';

type TrackFormData = {
    picture: any;
    audio: any;
    artist: string | null;
    name: string | null;
    text: string | null;
}

export interface UseTrackForm {
    activeStep: number;
    formValues: TrackFormData;
    reset: () => void;
    goNextStep: () => void;
    goPrevStep: () => void;
    resetForm: () => void;
    submit: () => void;
}

export const useTrackForm = (): UseTrackForm => {
    const [activeStep, setActiveStep] = useState(TRACK_FORM_INITIAL_STEP);
    const {
        formValues,
        onSubmit,
        reset,
    } = useForm();

    const goNextStep = useCallback(() => {
        setActiveStep(prevState => (prevState + 1));
    }, []);

    const goPrevStep = useCallback(() => {
        setActiveStep(prevState => (prevState - 1));
    }, []);

    const resetForm = useCallback(() => {
        reset()
    }, [reset]);

    const submit = useCallback(() => {
        const dto: CreateTrackDto = {
            picture: formValues.picture,
            audio: formValues.audio,
            artist: formValues.artist,
            name: formValues.name,
            text: formValues.text,
        };
        const formData = new FormData();

        Object.keys(dto).forEach((key) => formData.append(key, dto[key]));

        onSubmit(formData);
    }, [onSubmit, formValues]);


    return {
        activeStep: activeStep,
        formValues,
        reset,
        goNextStep,
        goPrevStep,
        resetForm,
        submit,
    };
};