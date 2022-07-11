import { FileUploadButton } from "components";

type TrackFormCoverStep = {
  fileType: string;
  handleUpload: any;
}

export const TrackFormCoverStep = ({ fileType, handleUpload }: TrackFormCoverStep) => {
  return (
    <FileUploadButton
      fileType={fileType}
      handleUpload={handleUpload}
    />
  )
};