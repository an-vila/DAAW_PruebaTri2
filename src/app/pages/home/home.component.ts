import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieModel } from '../../models/serie.model';
import { SeriesService } from '../../services/series.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  series$: Observable<SerieModel[]>;
  idNuevo: string | null = null;

  constructor(
    private seriesService: SeriesService) {
    this.series$ = this.seriesService.getAll();
  }
}