import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Utilities } from '../../shared/utilities';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  mobile: boolean;

  constructor() { }

  ngOnInit() {
    this.mobile = Utilities.isMobile();
  }

}
