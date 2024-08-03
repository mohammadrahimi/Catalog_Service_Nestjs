import { PriceDto } from "@Domain.Contract/Dto/Product/PriceDto";
import { IDomainEvent } from "@Framework.Core/Bus/IDomainEvent";

 
export class CategoryProductCreatedEvent implements IDomainEvent{
    
     private readonly EVENT_NAME = 'categoryproduct.created';

    CategoryproductId: string;
    CategoryproductName: string;
   
    constructor( CategoryProductId: string,
        categoryProductName: string
    ) {
        CategoryProductId=CategoryProductId;
        this.CategoryproductName = categoryProductName;
    }

}