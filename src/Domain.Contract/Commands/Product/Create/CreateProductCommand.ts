import { PriceDto } from "src/Domain.Contract/Dto/Product/PriceDto";
import { ICommand } from "src/Framework.Core/Bus/ICommand";

 
export class CreateProductCommand implements ICommand {
    
        productName: string;
        productCount: number;
        productPrice: PriceDto;
    
        constructor(productName: string,
            productCount:number,
            productPrice: PriceDto
        ) {
        this.productName = productName;
        this.productCount = productCount;
        this.productPrice = productPrice;
        }

  }