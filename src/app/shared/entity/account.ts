import { AccountDetail } from "./account.detail";

export class Account {
    id: number;
    name: string;
    icon: string;
    details: Array<AccountDetail>;

    constructor() {
        this.details = new Array<AccountDetail>();
    }

    toString(): string {
        return `{"id": ${this.id},"name":"${this.name}","icon": "${this.icon}","details":[${this.details.map((d) => d.toString()).join(',')}]`;
    }
}