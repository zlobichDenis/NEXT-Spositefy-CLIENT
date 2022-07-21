import { Button } from "@mui/material";

import { MainLayout } from "layouts";
import { TrackFormStepWrapper } from "./components";
import {
  TrackFormContainer,
  TrackFormButtonWrapper,
} from "./TrackForm.styled";
import { useTrackForm } from "./hooks";

export const TrackForm = () => {
  const {
    activeStep,
    goNextStep,
    goPrevStep,
    disabledNextButton,
    disabledPrevButton,
    currentStepConfig,
  } = useTrackForm();

  const { title, Component } = currentStepConfig;

  return (
    <MainLayout>
      <TrackFormContainer container>
        <TrackFormStepWrapper activeStep={activeStep}>
          <h2>{title}</h2>
          <Component />
        </TrackFormStepWrapper>
        <TrackFormButtonWrapper container>
          <Button
            disabled={disabledPrevButton}
            onClick={goPrevStep}
          >
            Back
          </Button>
          <Button
            disabled={disabledNextButton}
            onClick={goNextStep}>
            Next
          </Button>
        </TrackFormButtonWrapper>
      </TrackFormContainer>
    </MainLayout>
  )
};