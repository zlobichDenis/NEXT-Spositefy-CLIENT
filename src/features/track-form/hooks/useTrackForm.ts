import { useCallback, useState } from 'react';

import { TRACK_FORM_INITIAL_STEP } from '../constants';
import { useForm } from '../../../common';

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
    onSubmit: () => void;
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


    return {
        activeStep: activeStep,
        formValues,
        reset,
        goNextStep,
        goPrevStep,
        resetForm,
        onSubmit,
    };
};