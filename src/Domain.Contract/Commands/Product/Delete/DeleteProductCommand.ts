import { ICommand } from "@nestjs/cqrs";

 
export class DeleteProductCommand implements ICommand {
    
        productName: string;
        productId: string;
        
    
        constructor(productName: string,
            productId:string
        ) {
        this.productName = productName;
        this.productId = productId;
        
        }

  }