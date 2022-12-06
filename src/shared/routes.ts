export const routes = {
    HOME: '/' as const,
    TRACKS: '/tracks' as const,
    CREATE_TRACK: './tracks/create' as const,
    ALBUMS: './albums' as const,

    trackDetails: (id: string) => `/tracks/${id}`,
};