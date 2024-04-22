import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../components/cards/cards.component';
import { ClimateComponent } from '../../components/climate/climate.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardsComponent, ClimateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
