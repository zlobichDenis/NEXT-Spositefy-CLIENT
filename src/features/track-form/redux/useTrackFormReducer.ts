import { useAppDispatch, useAppSelector } from 'store';
import { CreateTrackDto } from 'api/types';
import { selectTrackFormState, selectTrackFormData, selectTrackFormError } from './track-form.slice';
import { postNewTrack } from './track-form.actions';

export const useTrackFormReducer = () => {
    const state = useAppSelector(selectTrackFormState);
    const data = useAppSelector(selectTrackFormData);
    const error = useAppSelector(selectTrackFormError);

    const dispatch = useAppDispatch();

    const createNewTrack = (dto: CreateTrackDto) => dispatch(postNewTrack(dto));

    return {
        state,
        data,
        error,
        createNewTrack,
    };
};