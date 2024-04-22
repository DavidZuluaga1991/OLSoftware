import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Climate } from '../../models/climate.model';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {
  private readonly _http = inject(HttpClient);

  public getClimate(): Observable<Climate> {
    const apikey = '439d4b804bc8187953eb36d2a8c26a02';
    return this._http.get<Climate>(`https://openweathermap.org/data/2.5/find?q=Cali&appid=${apikey}`);
  }
}
