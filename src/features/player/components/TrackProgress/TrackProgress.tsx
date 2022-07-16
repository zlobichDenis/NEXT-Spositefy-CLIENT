import { Slider } from "@mui/material";

import { TrackProgressWrapper } from "./TrackProgress.styled";

type TrackProgressProps = {
  fullDuration: number;
  currentDuration: number;
  onChange: (event: Event) => void;
}

export const TrackProgress = ({ fullDuration, currentDuration, onChange }: TrackProgressProps) => {


  return (
    <TrackProgressWrapper>
      <Slider
        size="medium"
        step={1}
        min={currentDuration}
        max={fullDuration}
        value={currentDuration}
        onChange={onChange}
      />
      <div>{currentDuration} / {fullDuration}</div>
    </TrackProgressWrapper>
  )
};