export const TRACK_FORM_FIELDS = {
    NAME: 'name',
    ARTIST: 'artist',
    TEXT: 'text',
    AUDIO: 'audio',
    PICTURE: 'picture',
    ACTIVE_STEP: 'activeStep',
};

export const TRACK_FORM_INITIAL_VALUE = {
    [TRACK_FORM_FIELDS.NAME]: '',
    [TRACK_FORM_FIELDS.ARTIST]: '',
    [TRACK_FORM_FIELDS.TEXT]: '',
    [TRACK_FORM_FIELDS.AUDIO]: null,
    [TRACK_FORM_FIELDS.PICTURE]: null,
    [TRACK_FORM_FIELDS.ACTIVE_STEP]: 0,
};

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