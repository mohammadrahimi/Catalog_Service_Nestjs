import { PriceDto } from "@Domain.Contract/Dto/Product/PriceDto";
import { ICommand } from "@nestjs/cqrs";

 

 
export class CreateProductCommand implements ICommand {
    
        productName: string;
        productCount: number;
        productPrice: PriceDto;
        categoryProductId: string;

        constructor(productName: string,
            productCount:number,
            productPrice: PriceDto,
            categoryProductId: string,
        ) {
        this.productName = productName;
        this.productCount = productCount;
        this.productPrice = productPrice;
        this.categoryProductId=categoryProductId;
        }

  }