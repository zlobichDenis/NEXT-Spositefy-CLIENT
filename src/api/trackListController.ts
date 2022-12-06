import { Track } from 'types';
import { ApiService } from './ApiService';
import { API } from './constants';

class TrackListController extends ApiService {
    get = () => this.client.get<Track[]>(API.trackList);
}

export const trackListController = new TrackListController();