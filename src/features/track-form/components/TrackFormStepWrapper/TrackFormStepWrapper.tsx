import { Container, Step, Stepper, StepLabel } from '@mui/material';

import { TrackFromStepProps } from './types';
import {
    TrackFormStepCardWrapper,
    TrackFormStepCard,
} from './TrackFormStepWrapper.styled';
import { TRACK_FORM_STEPS } from '../../constants';

export const TrackFormStepWrapper = ({ activeStep, children }: TrackFromStepProps) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {TRACK_FORM_STEPS.map((stepName, index) => {
                    return (
                        <Step
                            key={stepName}
                            completed={activeStep > index}
                        >
                            <StepLabel>{stepName}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            <TrackFormStepCardWrapper>
                <TrackFormStepCard>
                    {children}
                </TrackFormStepCard>
            </TrackFormStepCardWrapper>
        </Container>
    );
};