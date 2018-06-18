import { Category } from "./category";
import { PaymentType } from "./payment.enum";
import { TypeM } from "./type";
import { Account } from "./Account";

export class AccountDetail{
    category: Category;
    date: Date;
    description: string;
    from?: Account;
    payment: PaymentType;
    type: TypeM;
    value: number;

    toString() : string{
        if (this.from){
            return `{"value":${this.value},"type":${this.type},"payment":${this.payment},"description":"${this.description}",category":${this.category.id},"date":"${this.date.getMonth()+1}/${this.date.getDate()}/${this.date.getFullYear()}","time":"${this.date.getHours()}/${this.date.getMinutes()}","from":${this.from.id}}`;
        }
        return `{"value":${this.value},"type":${this.type},"payment":${this.payment},"description":"${this.description}",category":${this.category.id},"date":"${this.date.getMonth()+1}/${this.date.getDate()}/${this.date.getFullYear()}","time":"${this.date.getHours()}/${this.date.getMinutes()}"}`;
    }
}