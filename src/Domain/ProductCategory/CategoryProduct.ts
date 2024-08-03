import { AggregateRoot } from "@Framework.Core/Domain/AggregateRoot";
import { CategoryProductId } from "./ValueObjects/CategoryProductId";
import { CreateCategoryProductCommand } from "@Domain.Contract/Commands/CategoryProduct/Create/CreateCategoryProductCommand";
import { DomainErrors } from "./Errors/Errors.CategoryProduct";
import { CategoryProductCreatedEvent } from "@Domain.Contract/Event/CategoryProduct/CategoryProductCreatedEvent";

 
export class CategoryProduct extends AggregateRoot<CategoryProductId> { 

   private _categoryProductName:  string;
 
   private constructor(categoryProductName : string)
    {
        super(CategoryProductId.CreateUnique());
        
        this._categoryProductName=categoryProductName;
       
    }

    public static create(command: CreateCategoryProductCommand) {

       
        if(command.categoryProductName === "" ||  command.categoryProductName === undefined ){
            throw new DomainErrors.CategoryProductNameIsEmpty();
        }
          
        var _categoryProduct = new CategoryProduct(
            command.categoryProductName
        );

        _categoryProduct.AddEventChanges(
            new CategoryProductCreatedEvent(
               String(_categoryProduct.Id.Value),
               command.categoryProductName
            )
        )

        return _categoryProduct;
      }


    public get categoryProductName() : string {
        return this._categoryProductName;
    }
   

}
    
    