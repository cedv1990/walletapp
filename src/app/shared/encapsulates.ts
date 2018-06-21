import { Account } from "./entity/Account";
import { Category } from "./entity/category";
import { AccountDetail } from "./entity/account.detail";
import { DTOAccount, DTODetails } from "./interfaces";
import { TypeM } from "./entity/type.enum";
import { PaymentType } from "./entity/payment.enum";

export class Encapsulates {
    accounts: Array<Account>;
    categories: Array<Category>;

    constructor(){
        this.loadCategories();
        this.loadAccounts();
    }

    loadAccounts(): void {
        const accountsList: string = localStorage.getItem('accounts-list');

        if (!!accountsList)
            this.accounts = JSON.parse( accountsList );
        else {
            this.accounts = new Array<Account>();
            this.setAccounts();
        }

        this.loadDataDetails();
    }

    private loadDataDetails(): void {
        const accountsDetails: string = localStorage.getItem('accounts');

        if (!!accountsDetails) {
            const parseSplit = (str: string, sep: string) => str.split(sep).map(x => parseInt(x));

            let details: Array<DTOAccount> = JSON.parse(accountsDetails);

            details.forEach((acc: DTOAccount) => {
                const account: Account = this.accounts.find(x => x.id == acc.id);

                acc.details.forEach((det: DTODetails) => {
                    const dateParts: number[] = parseSplit(det.date, '/');
                    const timeParts: number[] = parseSplit(det.time, ':');

                    account.details.push(<AccountDetail>{
                        date: new Date(dateParts[2], dateParts[0], dateParts[1], timeParts[0], timeParts[1]),
                        description: det.description,
                        type: <TypeM>det.type,
                        payment: <PaymentType>det.payment,
                        value: det.value,
                        category: this.categories.find(x => x.id == det.category),
                        from: det.from ? this.accounts.find(x => x.id == det.from) : null
                    });
                });
            });
        }
    }

    private setAccounts(): void {
        this.accounts.push(<Account>{
            details: new Array<AccountDetail>(),
            id: 1,
            name: "Ahorros",
            icon: "fas fa-piggy-bank"
        });
        this.accounts.push(<Account>{
            details: new Array<AccountDetail>(),
            id: 2,
            name: "Bolsillo",
            icon: "fas fa-shopping-bag"
        });
        this.accounts.push(<Account>{
            details: new Array<AccountDetail>(),
            id: 3,
            name: "Crédito Master",
            icon: "fab fa-cc-mastercard"
        });
        localStorage.setItem('accounts-list', JSON.stringify(this.accounts));
    }

    loadCategories(): void {
        const categoriesList: string = localStorage.getItem('categories-list');

        if (!!categoriesList)
            this.categories = JSON.parse( categoriesList );
        else {
            this.categories = new Array<Category>();
            this.setCategories();
        }
    }

    private setCategories(): void {
        this.categories.push(<Category>{
            id: 1,
            name: 'Salario',
            icon: 'fas fa-hand-holding-usd'
        });
        this.categories.push(<Category>{
            id: 2,
            name: 'Comida',
            icon: 'fas fa-utensils'
        });
        this.categories.push(<Category>{
            id: 3,
            name: 'Transporte',
            icon: 'fas fa-bus'
        });
        localStorage.setItem('categories-list', JSON.stringify(this.categories));
    }
}