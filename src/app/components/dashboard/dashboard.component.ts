import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { NotificationStore } from '../../store/notification.store';
import { getState } from '@ngrx/signals';
import { NotificationService } from './services/notification/notification.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  notificationStore = inject(NotificationStore);
  private readonly _notificationSvc = inject(NotificationService);

  constructor() {
    const state = getState(this.notificationStore);
    console.log(state)
    this.notificationStore.addAllNotifications();
    const notifications = toSignal(this._notificationSvc.getAllNotification(), { initialValue: [] });
    this.notificationStore.addAllNotifications2(notifications());
    // effect(() => {
    //   const state = getState(this.notificationStore);
    //   console.log(state)
    // }, {
    //   allowSignalWrites: true
    // });
  }
}
