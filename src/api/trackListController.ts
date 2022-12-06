
import { ApiService } from './ApiService';
import { API } from './constants';
import { CreateTrackDto, Track } from './types';

class TrackListController extends ApiService {
    get = () => this.client.get<Track[]>(API.trackList);

    create = (dto: CreateTrackDto) => this.client.post<Track>(API.trackList, dto);
}

export const trackListController = new TrackListController();