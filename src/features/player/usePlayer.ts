import { useCallback, useEffect } from 'react';

import { Track } from 'types';
import { stopPropagation } from 'utils';
import { usePlayerReducer } from './redux';

let audio;

export const usePlayer = () => {
    const {
        play,
        pause,
        setDuration,
        setTrack,
        setVolume,
        setCurrentTime,
        state,
    } = usePlayerReducer();

    const playTrack = useCallback(() => {
        audio.play();
        play();
    }, [play]);

    const pauseTrack = useCallback(() => {
        audio.pause();
        pause();
    }, [pause]);

    const playPauseToggle = useCallback((event) => {
        stopPropagation(event);

        if (state.isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    }, [pauseTrack, playTrack, state.isPlaying]);

    const changeVolume = useCallback((event) => {
        const volume = Math.ceil(event.target.value);

        setVolume(volume);
        audio.volume = volume;
    }, [setVolume]);

    const changeCurrentTime = useCallback((event) => {
        const currentTime = Math.ceil(event.target.value);

        setCurrentTime(currentTime);
        audio.currentTime = currentTime;
    }, [setCurrentTime]);

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        }
    }, []);

    const selectTrack = useCallback((track: Track) => {
        setTrack(track);
        audio.src = `http://localhost:5000/${track.audio}`;
        playTrack();

        audio.onloadeddata = () => {
            setDuration(Math.ceil(audio.duration));
        };
        audio.ontimeupdate = () => {
            setCurrentTime(Math.ceil(audio.currentTime));
        };
    }, [setTrack, playTrack, setDuration, setCurrentTime]);

    return {
        playPauseToggle,
        changeDuration: changeCurrentTime,
        changeVolume,
        selectTrack,
        state,
    };
};