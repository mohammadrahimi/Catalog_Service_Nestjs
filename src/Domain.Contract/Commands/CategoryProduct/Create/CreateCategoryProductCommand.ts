 
import { ICommand } from "@nestjs/cqrs";

 

 
export class CreateCategoryProductCommand implements ICommand {
    
         categoryProductName: string;
       
    
        constructor(categoryProductName: string) {
         this.categoryProductName = categoryProductName;
        }

  }