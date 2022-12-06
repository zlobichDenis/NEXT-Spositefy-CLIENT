import { Slider } from '@mui/material';

import { VolumeControlWrapper } from './VolumeControl.styled';

type VolumeControlProps = {
    volume: number;
    onChange: (event) => void;
};

export const VolumeControl = ({ volume, onChange }: VolumeControlProps) => {
    return (
        <VolumeControlWrapper>
            <Slider
                size="medium"
                step={0.01}
                min={0}
                max={0.1}
                value={volume}
                onChange={onChange}
            />
            <div>{volume}</div>
        </VolumeControlWrapper>
    );
};