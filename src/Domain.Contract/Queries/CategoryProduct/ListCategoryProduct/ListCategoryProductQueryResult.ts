import { PriceDto } from "@Domain.Contract/Dto/Product/PriceDto";
 

export class ListCategoryProductQueryResult   {
    
    categoryProductName: string;

    constructor(categoryProductName: string  ) {
       
       this.categoryProductName = categoryProductName;
    
    }


}