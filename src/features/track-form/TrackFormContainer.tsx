import { FormProvider } from 'common';
import { MainLayout } from 'layouts';
import {
    TrackFormMainContainer,
} from './TrackFormContainer.styled';
import { TrackForm } from './TrackForm';
import { TRACK_FORM_INITIAL_VALUE } from './constants';
import { useCreateNewTrack } from './hooks';

export const TrackFormContainer = () => {
    const { createTrack } = useCreateNewTrack();

    return (
        <FormProvider
            initialValues={TRACK_FORM_INITIAL_VALUE}
            onSubmit={createTrack}
        >
            <MainLayout>
                <TrackFormMainContainer container>
                    <TrackForm/>
                </TrackFormMainContainer>
            </MainLayout>
        </FormProvider>
    )
};