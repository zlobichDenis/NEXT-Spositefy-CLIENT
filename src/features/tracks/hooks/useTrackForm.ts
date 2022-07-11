import { useState, useCallback, FC, ChangeEvent, useMemo } from "react";

import { TRACK_FORM_INITIAL_STEP, TRACK_FORM_INITIAL_VALUE, TRACK_FORM_STEPS } from "../constants";
import { trackFormConfig } from "../config";

type TrackFormData = {
  picture: any;
  audio: any;
  artist: string | null;
  name: string | null;
  text: string | null;
}

export interface UseTrackForm {
  activeStep: number;
  formData: TrackFormData;
  stepTitle: string;
  addArtistName: (event: ChangeEvent<HTMLInputElement>) => void;
  addName: (event: ChangeEvent<HTMLInputElement>) => void;
  addPicture: (picture: any) => void;
  addTrackAudio: (audio: any) => void;
  addTrackText: (event: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  goNextStep: () => void;
  goPrevStep: () => void;
  disabledNextButton: boolean;
  disabledPrevButton: boolean;
  CurrentStepComponent: FC;
}

export const useTrackForm = (): UseTrackForm => {
  const [activeStep, setActiveStep] = useState(TRACK_FORM_INITIAL_STEP);
  const [formData, setFormData] = useState<TrackFormData>(TRACK_FORM_INITIAL_VALUE);

  const addPicture = useCallback((event: any) => {
    setFormData((prevState) => ({ ...prevState, picture: event.target.files[0] }));
  }, [formData]);

  const addName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ ...prevState, name: event.target.value }));
  }, [formData]);

  const addArtistName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ ...prevState, artist: event.target.value }));
  }, [formData]);

  const addTrackText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ ...prevState, text: event.target.value }));
  }, [formData]);

  const addTrackAudio = useCallback((event: any) => {
    setFormData((prevState) => ({ ...prevState, audio: event.target.files[0] }));
  }, [formData]);

  const reset= useCallback(() => {
    setFormData(TRACK_FORM_INITIAL_VALUE);
  }, []);

  const goNextStep = useCallback(() => {
    setActiveStep((prevState) => prevState + 1);
  }, [activeStep]);

  const goPrevStep = useCallback(() => {
    setActiveStep((prevState) => prevState - 1);
  }, [activeStep]);

  const disabledNextButton = activeStep === (TRACK_FORM_STEPS.length - 1);
  const disabledPrevButton = activeStep === TRACK_FORM_INITIAL_STEP;

  const formConfig = useMemo(() => trackFormConfig({
    addPicture,
    addName,
    addArtistName,
    addTrackAudio,
    addTrackText,
  }), []);

  const { title: stepTitle, Component: CurrentStepComponent } = formConfig[activeStep];

  return {
    activeStep,
    formData,
    addArtistName,
    addName,
    addPicture,
    addTrackAudio,
    addTrackText,
    reset,
    goNextStep,
    goPrevStep,
    disabledNextButton,
    disabledPrevButton,
    stepTitle,
    CurrentStepComponent,
  };
};