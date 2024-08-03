import { ErrorBase } from "@Framework.Core/Error/Error.Base";

 

export   namespace DomainErrors {

     export class CategoryProductNameIsEmpty  extends  ErrorBase  {
        public  constructor() {
            super('400', 400, "CategoryProductName Is Empty!");
          }
       }
  
   
     
 
}
 
   
  