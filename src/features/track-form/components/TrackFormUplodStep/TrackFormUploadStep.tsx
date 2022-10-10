import { FileUploadButton } from 'components';
import { useInput } from 'common';
import { TRACK_FORM_FIELDS } from '../../constants';

export const TrackFormUploadStep = () => {
    const { onChange } = useInput(TRACK_FORM_FIELDS.AUDIO);

    return (
        <FileUploadButton
            fileType="audio/*"
            handleUpload={onChange}
        />
    )
};