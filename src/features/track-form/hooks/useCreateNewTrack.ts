import { useCallback } from 'react';
import { CreateTrackDto } from 'api/types';
import { useTrackFormReducer } from '../redux';

export const useCreateNewTrack = () => {
    const { state, data, error, createNewTrack } = useTrackFormReducer();

    const createTrack = useCallback((formData: CreateTrackDto) => (
        createNewTrack(formData)
    ), [createNewTrack]);

    return {
        state: {
            state,
            data,
            error,
        },
        createTrack,
    };
};