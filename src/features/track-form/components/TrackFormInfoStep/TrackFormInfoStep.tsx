import { useInput } from 'common';
import {
    TrackFormInfoContainer,
    TrackFormInfoTextField,
} from './TrackFormInfoStep.styled';
import { TRACK_FORM_FIELDS, TRACK_FORM_INPUTS_LABELS } from '../../constants';

export const TrackFormInfoStep = () => {
    const { onChange: inputName } = useInput(TRACK_FORM_FIELDS.NAME);
    const { onChange: inputArtist } = useInput(TRACK_FORM_FIELDS.ARTIST);
    const { onChange: inputTrackText } = useInput(TRACK_FORM_FIELDS.TEXT);

    return (
        <TrackFormInfoContainer container>
            <TrackFormInfoTextField
                label={TRACK_FORM_INPUTS_LABELS.info.name}
                onChange={inputName}
            />
            <TrackFormInfoTextField
                label={TRACK_FORM_INPUTS_LABELS.info.artist}
                onChange={inputArtist}
            />
            <TrackFormInfoTextField
                label={TRACK_FORM_INPUTS_LABELS.info.text}
                rows={3}
                onChange={inputTrackText}
                multiline
            />
        </TrackFormInfoContainer>
    )
};