import { FormProvider } from 'common';
import { MainLayout } from "layouts";
import {
    TrackFormMainContainer,
} from "./TrackFormContainer.styled";
import { TrackForm } from './TrackForm';
import { TRACK_FORM_INITIAL_VALUE } from './constants';

export const TrackFormContainer = () => {
  return (
      <FormProvider
          initialValues={TRACK_FORM_INITIAL_VALUE}
          onSubmit={() => console.log('onSubmit')} // TODO will be refactored when connection with BA will be established
      >
        <MainLayout>
          <TrackFormMainContainer container>
            <TrackForm />
          </TrackFormMainContainer>
        </MainLayout>
      </FormProvider>
  )
};