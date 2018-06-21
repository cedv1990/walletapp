import { Component, OnInit, OnDestroy } from '@angular/core';
import { Account } from '../../shared/entity/account';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Encapsulates } from '../../shared/encapsulates';
import { TypeM } from '../../shared/entity/type.enum';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['details.component.scss']
})
export class DetailsComponent implements OnInit {

  encapsulates: Encapsulates;
  account: Account;
  id: number;
  private sub: any;
  private navigationSubscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.encapsulates = new Encapsulates();

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
    
  }

  initialiseInvites() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.account = this.encapsulates.accounts.find(x => x.id == this.id);
  }

  enumTypeString(type: TypeM): string {
    return TypeM[type - 1];
  }

  dateString(date: Date): string {
    return `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
  }
}
