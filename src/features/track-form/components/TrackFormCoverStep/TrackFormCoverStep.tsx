import { FileUploadButton } from 'components';
import { useInput } from 'common';
import { TRACK_FORM_FIELDS } from '../../constants';

export const TrackFormCoverStep = () => {
    const { onChange } = useInput(TRACK_FORM_FIELDS.PICTURE);

    return (
        <FileUploadButton
            fileType="image/*"
            handleUpload={onChange}
        />
    )
};