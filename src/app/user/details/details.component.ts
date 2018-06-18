import { Component, OnInit, OnDestroy } from '@angular/core';
import { Account } from '../../shared/entity/account';
import { AccountDetail } from '../../shared/entity/account.detail';
import { Category } from '../../shared/entity/category';
import { PaymentType } from '../../shared/entity/payment.enum';
import { TypeM } from '../../shared/entity/type.enum';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

interface DTODetails {
  value: number;
  category: number;
  type: number;
  description: string;
  payment: number;
  date: string;
  time: string;
  from?: number;
}

interface DTOAccount {
  id: number;
  name: string;
  details: Array<DTODetails>;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  accountsTyped: Array<Account> = new Array<Account>();
  account: Account;
  id: number;
  private sub: any;
  private navigationSubscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    localStorage.setItem('accounts', '[{"id":2,"name":"pocket","details":[]},{"id":1,"name":"savings","details":[{"value":20000,"category":3,"type":3,"description":"compra","payment":1,"date":"06/18/2018","time":"15:09","from":2},{"value":20000,"category":3,"type":3,"description":"compra","payment":1,"date":"06/18/2018","time":"15:09","from":2}]}]');

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });

    this.parseAccounts();
  }

  ngOnInit() {
    
  }

  initialiseInvites() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.account = this.accountsTyped.find(x => x.id == this.id);
  }

  private parseAccounts(): void {
    const accounts: Array<DTOAccount> = JSON.parse(localStorage.getItem('accounts'));

    const parseSplit = (str: string) => str.split('/').map(x => parseInt(x));

    accounts.forEach(ac => {
      let account = new Account();
      account.id = ac.id;
      account.name = ac.name;
      account.details = ac.details.map(det => {
        const dateParts: number[] = parseSplit(det.date);
        const timeParts: number[] = parseSplit(det.time);

        let detail = new AccountDetail();
        detail.category = new Category();
        detail.date = new Date(dateParts[0], dateParts[1], dateParts[2], timeParts[0], timeParts[1]);
        detail.description = det.description;
        detail.payment = <PaymentType>det.payment;
        detail.type = <TypeM>det.type;
        detail.value = det.value;
        if (det.from) detail.from = new Account();
        return detail;
      });

      this.accountsTyped.push(account);
    });
  }
}
