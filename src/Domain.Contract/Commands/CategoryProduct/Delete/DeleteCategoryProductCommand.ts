


 
import { ICommand } from "@nestjs/cqrs";

 

 
export class DeleteCategoryProductCommand implements ICommand {
    
    categoryProductName: string;
    categoryProductId: string;
    

    constructor(categoryProductName: string,
        categoryProductId:string
    ) {
    this.categoryProductName = categoryProductName;
    this.categoryProductId = categoryProductId;
    
    }
  }