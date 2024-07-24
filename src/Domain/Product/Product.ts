import { AggregateRoot } from "src/Framework.Core/Domain/AggregateRoot";
import { ProductId } from "./ValueObjects/ProductId";
import { Price } from "./ValueObjects/Price";
import { CreateProductCommand } from "src/Domain.Contract/Commands/Product/Create/CreateProductCommand";
import { ProductCreatedEvent } from "src/Domain.Contract/Event/Product/ProductCreatedEvent";
import { DomainErrors } from "./Errors/Errors.Product";

export class Product extends AggregateRoot<ProductId> { 

   private     _productName:  string;
   private     _productCount: number;
   private     _productPrice: Price;
   
   private constructor(productName : string,
                        productCount:number,
                        productPrice: Price)
    {
        super(ProductId.CreateUnique());
        
        this._productName=productName;
        this._productCount=productCount;
        this._productPrice=productPrice;
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

        var _price = Price.Create(command.productPrice.amount, command.productPrice.currency);
        
        var _product = new Product(
            command.productName,
            command.productCount,
            _price
        );

        _product.AddEventChanges(
            new ProductCreatedEvent(
               String(_product.Id.Value),
               command.productName,
               command.productCount,
               command.productPrice
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

}
    
    