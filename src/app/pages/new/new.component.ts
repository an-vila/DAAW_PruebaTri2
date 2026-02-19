import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SeriesService } from '../../services/series.service';
import { Router } from '@angular/router';
import { SerieModel } from '../../models/serie.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  idNuevo: number | null = null;

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    channel: new FormControl('', [Validators.required]),
    rating: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
  });

  constructor(
    private serieService: SeriesService,
    private router: Router,
  ) {}

  save() {
    if (this.form.valid) {
      const payload: SerieModel = {
        id: 0,
        title: this.form.controls.title.value ?? '',
        channel: this.form.controls.channel.value ?? '',
        rating: this.form.controls.rating.value ?? 0,
      };

      this.serieService.create(payload).subscribe({
        next: (serie) => {
          this.idNuevo = serie.id ?? 101;
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 3000);
        },
        error: (e) => console.error('Error al crear:', e),
      });
    }
  }
}
