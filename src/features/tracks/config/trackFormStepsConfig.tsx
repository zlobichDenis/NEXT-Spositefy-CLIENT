import { TrackFormInfoStep, TrackFormCoverStep, TrackFormUploadStep } from "../components";
import { UseTrackForm } from "../hooks";

type TrackFormConfig = Pick<UseTrackForm, 'addPicture' | 'addTrackText' | 'addTrackAudio' | 'addName' | 'addArtistName'>

export const trackFormConfig = ({
    addPicture,
    addName,
    addArtistName,
    addTrackText,
    addTrackAudio,
  }: TrackFormConfig) => [
  {
    title: 'Info about track',
    stepName: 'Add track info',
    Component: () => (
      <TrackFormInfoStep
        handleInputArtist={addArtistName}
        handleInputName={addName}
        handleText={addTrackText}
      />
    ),
  }, {
    title: 'Upload track cover',
    stepName: 'Add track cover',
    Component: () => (
      <TrackFormCoverStep
        handleUpload={addPicture}
        fileType="image/*" />
    )
  }, {
    title: 'Upload track',
    stepName: 'Upload your track',
    Component: () => (
      <TrackFormUploadStep
        fileType="audio/*"
        handleUpload={addTrackAudio}
      />),
  },
];