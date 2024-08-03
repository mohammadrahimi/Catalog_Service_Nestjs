import { ValueObject } from "@Framework.Core/Domain/ValueObject";

 

interface IPriceProps {
    currency : string;
    amount : number;
}

export  class  Price extends ValueObject<IPriceProps>{

    private constructor(value:IPriceProps) {
        super(value);
    }

    get Amount(): number {
        return this.value.amount;
    }
    get Currency(): string {
        return this.value.currency;
    }

    public static Create(amount: number,currency: string) : Price {
        return new Price({amount:amount,currency:currency});
    }
 
}