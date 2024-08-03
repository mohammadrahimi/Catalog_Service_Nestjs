import { PriceDto } from "@Domain.Contract/Dto/Product/PriceDto";
import { IDomainEvent } from "@Framework.Core/Bus/IDomainEvent";

 
export class ProductCreatedEvent implements IDomainEvent{
    
     private readonly EVENT_NAME = 'product.created';

    productId: string;
    productName: string;
    productCount: number;
    productPrice: PriceDto;
    categoryProductId: string;

    constructor( productId: string,
        productName: string,
        productCount:number,
        productPrice: PriceDto,
        categoryProductId: string
    ) {
        productId=productId;
        this.productName = productName;
        this.productCount = productCount;
        this.productPrice = productPrice;
        this.categoryProductId = categoryProductId;
    }

}