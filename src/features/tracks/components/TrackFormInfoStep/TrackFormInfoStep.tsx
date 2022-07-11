import { ChangeEvent } from "react";

import {
  TrackFormInfoContainer,
  TrackFormInfoTextField,
} from "./TrackFormInfoStep.styled";
import { TRACK_FORM_INPUTS_LABELS } from "../../constants";

type TrackFormInfoStepProps = {
  handleInputName: (event: ChangeEvent) => void;
  handleInputArtist: (event: ChangeEvent) => void;
  handleText: (event: ChangeEvent) => void;
}

export const TrackFormInfoStep = ({ handleInputName, handleInputArtist, handleText }: TrackFormInfoStepProps) => {
  return (
    <TrackFormInfoContainer container>
      <TrackFormInfoTextField
        label={TRACK_FORM_INPUTS_LABELS.info.name}
        onChange={handleInputName}
      />
      <TrackFormInfoTextField
        label={TRACK_FORM_INPUTS_LABELS.info.artist}
        onChange={handleInputArtist}
      />
      <TrackFormInfoTextField
        label={TRACK_FORM_INPUTS_LABELS.info.text}
        rows={3}
        onChange={handleText}
        multiline
      />
    </TrackFormInfoContainer>
  )
};