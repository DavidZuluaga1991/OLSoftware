import { LoadingService } from '@services';

import { Component, inject } from '@angular/core';
// import { LoadingService } from '../../../core/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [LoadingService],
})
export class LoadingComponent {

  private readonly spinnerSvc = inject(LoadingService);
  public isLoading = this.spinnerSvc.isLoading;
}
