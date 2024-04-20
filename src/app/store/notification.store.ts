import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { NotificationService } from '../components/dashboard/services/notification/notification.service';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { toSignal } from "@angular/core/rxjs-interop";

export interface Notification {
  id: number;
  type: string;
  details: string;
  time: string;
}

export interface NotificationStore {
  notifications: Notification[];
}

const initialState: NotificationStore = {
  notifications: [],
};

export const NotificationStore = signalStore(
  withState(initialState),
  withComputed(({ notifications }) => ({
    notificationsCount: computed(() => notifications().length),
  })),
  withMethods(({ notifications, ...store }, notificationSvc = inject(NotificationService)) => ({
    addAllNotifications() {
      notificationSvc.getAllNotification().subscribe((noti)=> {
        patchState(store, { notifications: noti });
      });
      const notification = toSignal(notificationSvc.getAllNotification());
      console.log(notification())
      const updateNotifications = [...notifications()];
      patchState(store, { notifications: updateNotifications });
    },
    addAllNotifications2(alllNotifications: Notification[]) {
      const updateNotifications = [...notifications(), ...alllNotifications];
      console.log(updateNotifications)
      patchState(store, { notifications: updateNotifications });
    },
    addToNotification(notification: Notification) {
      const updateNotification = [...notifications(), notification];
      patchState(store, { notifications: updateNotification });
    },
    removeItemFromNotification(id: number) {
      const updatedNotifications = notifications().filter(notification => notification.id !== id);
      patchState(store, {notifications: updatedNotifications });
    }
  }))
)
