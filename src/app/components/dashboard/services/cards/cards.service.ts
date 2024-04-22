import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../models/card.module';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private readonly _http = inject(HttpClient);

  public getAllCards(): Observable<Card> {
    return this._http.get<Card>('http://localhost:3000/dashboard_cards');
  }
}
