import { Component, inject } from '@angular/core';
import { ClimateService } from '../../services/climate/climate.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-climate',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './climate.component.html',
  styleUrl: './climate.component.scss'
})
export class ClimateComponent {
  private readonly _climateSvc = inject(ClimateService);
  public climate = toSignal(this._climateSvc.getClimate());
}
