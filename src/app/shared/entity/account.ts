import { AccountDetail } from "./account.detail";

export class Account {
    id: number;
    name: string;
    details: Array<AccountDetail>;

    toString(): string {
        return `{"id": ${this.id},"name":"${this.name}","details":[${this.details.map((d) => d.toString()).join(',')}]`;
    }
}