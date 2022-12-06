import { Button } from '@mui/material';

import { FileInput } from './FileUploadButton.styled';
import { useFileInput } from './useFileInput';

type FileUploadButtonProps = {
    fileType: string;
    handleUpload: any;
};

export const FileUploadButton = ({ fileType, handleUpload }: FileUploadButtonProps) => {
    const { ref, click } = useFileInput();

    return (
        <div onClick={click}>
            <FileInput
                ref={ref}
                type="file"
                accept={fileType}
                onChange={handleUpload}
            />
            <Button>
                Upload
            </Button>
        </div>
    );
};