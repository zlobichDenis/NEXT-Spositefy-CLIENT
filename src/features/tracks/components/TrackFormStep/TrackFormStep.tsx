import { Container, Step, Stepper, StepLabel } from "@mui/material";

import { TrackFromStepProps } from "./types";
import {
  TrackFormStepsWrapper,
  TrackFormStepCard,
} from "./TrackFormStep.styled";
import { TRACK_FROM_STEPS_CONFIG } from "../../config";

export const TrackFormStep = ({ activeStep, children }: TrackFromStepProps) => {

  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {TRACK_FROM_STEPS_CONFIG.map((step, index) => {
          return (
            <Step
              key={step}
              completed={activeStep > index}
            >
            <StepLabel>{step}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <TrackFormStepsWrapper container>
        <TrackFormStepCard>
          {children}
        </TrackFormStepCard>
      </TrackFormStepsWrapper>
    </Container>
  );
};