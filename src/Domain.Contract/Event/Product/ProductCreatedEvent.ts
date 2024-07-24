import { PriceDto } from "src/Domain.Contract/Dto/Product/PriceDto";
import { IDomainEvent } from "src/Framework.Core/Bus/IDomainEvent";


export class ProductCreatedEvent implements IDomainEvent{
    
     private readonly EVENT_NAME = 'product.created';

    productId: string;
    productName: string;
    productCount: number;
    productPrice: PriceDto;

    constructor( productId: string,
        productName: string,
        productCount:number,
        productPrice: PriceDto
    ) {
        productId=productId;
        this.productName = productName;
        this.productCount = productCount;
        this.productPrice = productPrice;
    }

}