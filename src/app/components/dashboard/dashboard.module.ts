import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './dashboard.component';
import { NotificationStore } from '../../store/notification.store';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutComponent,
  ],
  providers: [
    NotificationStore
  ]
})
export class DashboardModule { }
