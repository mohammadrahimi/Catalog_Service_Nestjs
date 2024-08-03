import { ErrorBase } from "@Framework.Core/Error/Error.Base";

 

export   namespace DomainErrors {

     export class ProductNameIsEmpty  extends  ErrorBase  {
        public  constructor() {
            super('400', 400, "ProductName Is Empty!");
          }
       }
  
    export class ProductCountIsZiro  extends  ErrorBase  {
      public  constructor() {
          super('400', 400, "ProductCount Is Ziro!");
        }
     }
     export class ProductPriceIsNull  extends  ErrorBase  {
      public  constructor() {
          super('400', 400, "ProductPrice Is Null!");
        }
     }
     export class CategoryProductIdIsEmpty  extends  ErrorBase  {
      public  constructor() {
          super('400', 400, "CategoryProductId Is Null!");
        }
     }
     
 
}
 
   
  