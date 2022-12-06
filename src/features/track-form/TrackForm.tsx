import { Button } from '@mui/material';

import { TrackFormCoverStep, TrackFormInfoStep, TrackFormStepWrapper, TrackFormUploadStep } from './components';
import { TrackFormButtonWrapper } from './TrackFormContainer.styled';
import { useTrackForm } from './hooks';

export const TrackForm = () => {
    const {
        activeStep,
        goNextStep,
        goPrevStep,
    } = useTrackForm();

    return (
        <>
            <TrackFormStepWrapper activeStep={activeStep}>
                {activeStep === 0 && (
                    <TrackFormInfoStep/>
                )}
                {activeStep === 1 && (
                    <TrackFormCoverStep/>
                )}
                {activeStep === 2 && (
                    <TrackFormUploadStep/>
                )}
            </TrackFormStepWrapper>
            <TrackFormButtonWrapper container>
                <Button
                    disabled={activeStep === 0}
                    onClick={goPrevStep}
                >
                    Back
                </Button>
                <Button
                    disabled={activeStep === 2}
                    onClick={goNextStep}>
                    Next
                </Button>
            </TrackFormButtonWrapper>
        </>
    );
};