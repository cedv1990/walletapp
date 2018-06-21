export interface DTODetails {
    value: number;
    category: number;
    type: number;
    description: string;
    payment: number;
    date: string;
    time: string;
    from?: number;
}

export interface DTOAccount {
    id: number;
    details: Array<DTODetails>;
}