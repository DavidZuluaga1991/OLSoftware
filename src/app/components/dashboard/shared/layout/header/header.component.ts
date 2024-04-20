import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MENU_ITEMS } from './const/menu.const';
import { NotificationStore } from '../../../../../store/notification.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatBadgeModule, RouterModule, CommonModule],
  providers: [NotificationStore],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  public isViewPanelMenu = true;
  public menu = MENU_ITEMS;
  readonly notificationStore = inject(NotificationStore);

  constructor() {

    effect(() => {
      console.log(this.notificationStore.notificationsCount());
      const state = getState(this.notificationStore);
      console.log(state)
    }, {
      allowSignalWrites: true
    });
  }

}
