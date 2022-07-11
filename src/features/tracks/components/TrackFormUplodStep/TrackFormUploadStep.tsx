import { FileUploadButton } from "components";

type TrackFormUploadStep = {
  fileType: string;
  handleUpload: any;
}

export const TrackFormUploadStep = ({ fileType, handleUpload }: TrackFormUploadStep) => {
  return (
    <FileUploadButton
      fileType={fileType}
      handleUpload={handleUpload}
    />
  )
};