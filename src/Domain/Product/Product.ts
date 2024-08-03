import { AggregateRoot } from "@Framework.Core/Domain/AggregateRoot";
import { ProductId } from "./ValueObjects/ProductId";
import { Price } from "./ValueObjects/Price";
import { CreateProductCommand } from "@Domain.Contract/Commands/Product/Create/CreateProductCommand";
import { DomainErrors } from "./Errors/Errors.Product";
import { ProductCreatedEvent } from "@Domain.Contract/Event/Product/ProductCreatedEvent";

 
export class Product extends AggregateRoot<ProductId> { 

   private     _productName:  string;
   private     _productCount: number;
   private     _productPrice: Price;
   private     _categoryProductId: string;
   
   private constructor(productName : string,
                        productCount:number,
                        productPrice: Price,
                        categoryProductId: string)
    {
        super(ProductId.CreateUnique());
        
        this._productName=productName;
        this._productCount=productCount;
        this._productPrice=productPrice;
        this._categoryProductId=categoryProductId;
    }

    public static create(command: CreateProductCommand) {

        if(command.productCount <= 0 ){
           throw  new DomainErrors.ProductCountIsZiro();
        }
        if(command.productName === "" ||  command.productName === undefined ){
            throw new DomainErrors.ProductNameIsEmpty();
        }
        if(command.productPrice === undefined ||
            (command.productPrice.amount <=0 &&  command.productPrice.currency !== "")){
              throw  new DomainErrors.ProductPriceIsNull();
        }
        if(command.categoryProductId === "" ||  command.categoryProductId === undefined ){
            throw new DomainErrors.CategoryProductIdIsEmpty();
        }

        var _price = Price.Create(command.productPrice.amount, command.productPrice.currency);
        
        var _product = new Product(
            command.productName,
            command.productCount,
            _price,
            command.categoryProductId
        );

        _product.AddEventChanges(
            new ProductCreatedEvent(
               String(_product.Id.Value),
               command.productName,
               command.productCount,
               command.productPrice,
               command.categoryProductId
            )
        )

        return _product;
      }


    public get productName() : string {
        return this._productName;
    }
    public get productCount() : number {
        return this._productCount;
    }
    public get productPrice(): Price {
        return this._productPrice;
    }
    public get categoryProductId(): string {
        return this._categoryProductId;
    }

}
    
    