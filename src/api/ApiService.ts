import { HttpClient, httpClient } from "services";

export class ApiService {
  client: HttpClient;

  constructor(client: HttpClient = httpClient) {
    this.client = client;
  }
}