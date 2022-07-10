import { useState, useCallback } from "react";
import { Button } from "@mui/material";

import { MainLayout } from "layouts";
import { TRACK_FORM_INITIAL_STEP } from "./constants";
import { TrackFormStep } from "./components";
import { TRACK_FROM_STEPS_CONFIG } from "./config";
import {
  TrackFormContainer,
  TrackFormButtonWrapper,
} from "./TrackForm.styled";

export const TrackForm = () => {
  const [activeStep, setActiveStep] = useState(TRACK_FORM_INITIAL_STEP);

  const goToNextStep = useCallback(() => {
    setActiveStep((prevState) => prevState + 1);
  }, []);

  const goToPrevStep = useCallback(() => {
    setActiveStep((prevState) => prevState - 1);
  }, []);

  const disabledNextButton = activeStep === (TRACK_FROM_STEPS_CONFIG.length - 1);
  const disabledPrevButton = activeStep === TRACK_FORM_INITIAL_STEP;

  return (
    <MainLayout>
      <TrackFormContainer container>
        <TrackFormStep activeStep={activeStep}>
          <h1>Upload track</h1>
        </TrackFormStep>
        <TrackFormButtonWrapper container>
          <Button
            disabled={disabledPrevButton}
            onClick={goToPrevStep}
          >
            Back
          </Button>
          <Button
            disabled={disabledNextButton}
            onClick={goToNextStep}>
            Next
          </Button>
        </TrackFormButtonWrapper>
      </TrackFormContainer>
    </MainLayout>
  )
};