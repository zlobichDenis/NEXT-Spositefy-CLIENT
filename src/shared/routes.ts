export const routes = {
  HOME: '/' as const,
  TRACKS: '/tracks-list' as const,
  CREATE_TRACK: './tracks-list/create' as const,
  ALBUMS: './albums' as const,

  trackDetails: (id: string) => `/tracks/${id}`,
};