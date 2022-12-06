import { TrackProgressWrapper, TrackProgressSlider } from './TrackProgress.styled';

type TrackProgressProps = {
    fullDuration: number;
    currentDuration: number;
    onChange: (event: Event) => void;
};

export const TrackProgress = ({ fullDuration, currentDuration, onChange }: TrackProgressProps) => {


    return (
        <TrackProgressWrapper>
            <TrackProgressSlider
                size="medium"
                step={1}
                min={0}
                max={fullDuration}
                value={currentDuration}
                onChange={onChange}
            />
            <div>{currentDuration} / {fullDuration}</div>
        </TrackProgressWrapper>
    );
};