import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieModel } from '../models/serie.model';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private readonly url = 'https://peticiones.online/api/series';

  constructor(private http: HttpClient) {}

  getAll(): Observable<SerieModel[]> {
    return this.http.get<SerieModel[]>(this.url);
  }

  create(serie: SerieModel) {
    return this.http.post<SerieModel>(this.url, serie);
  }
}
