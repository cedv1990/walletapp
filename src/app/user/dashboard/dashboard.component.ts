import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Utilities } from '../../shared/utilities';
import { Encapsulates } from '../../shared/encapsulates';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  mobile: boolean;
  encapsulates: Encapsulates;

  constructor() {
    this.encapsulates = new Encapsulates();
  }

  ngOnInit() {
    this.mobile = Utilities.isMobile();
  }

}
