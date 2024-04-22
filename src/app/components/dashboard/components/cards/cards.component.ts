import { Component, inject } from '@angular/core';
import { CardsService } from '../../services/cards/cards.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  private readonly _cardsSvc = inject(CardsService);
  public cards$ = this._cardsSvc.getAllCards();
  public cards = toSignal(this._cardsSvc.getAllCards());
}
