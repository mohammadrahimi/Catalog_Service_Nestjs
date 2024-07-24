 
export class PriceDto {
    
            currency : string;
            amount :   number;
         
        constructor(amount:number,currency: string) {
            this.currency = currency;
            this.amount = amount;
        }
        
  }