export const CREATE_TRACK_FORM_PATH = '/tracks/create';

export const TRACK_FORM_INITIAL_STEP = 0;

export const TRACK_FORM_INPUTS_LABELS = {
  info: {
    name: 'Track name',
    artist: 'Artist name',
    text: 'Track text',
  },
  // cover: {
  //   title:
  // },
  // upload: {
  //   title:
  // },
};

export const TRACK_FORM_STEPS = ['Add track info', 'Upload track cover', 'Upload audio track'];

export const TRACK_FORM_INITIAL_VALUE = {
  name: '',
  artist: '',
  text: '',
  audio: null,
  picture: null,
};