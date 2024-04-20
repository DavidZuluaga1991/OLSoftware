import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../../../store/notification.store';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly _http = inject(HttpClient);

  public getAllNotification(): Observable<Notification[]> {
    return this._http.get<Notification[]>('http://localhost:3000/notification');
  }
}
