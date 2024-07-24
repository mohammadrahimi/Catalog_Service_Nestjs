import { Injectable } from "@nestjs/common";
import { Product } from "src/Domain/Product/Product";
import { IDataMapper } from "src/Framework.Core/DataMapper/IDataMapper";
import { ProductsEntity } from "../../Entity/Product.Entity";
 


@Injectable()
export class ProductDataMapper implements IDataMapper<Product,ProductsEntity> {
    toDomain(entity: ProductsEntity): Product {
       
        return Product.create({
            productCount:entity.count,
            productName:entity.name,
            productPrice: {amount:entity.price.Amount,currency:entity.price.Currency},

        });

    }
    toDomainEntity(product: Product): ProductsEntity {

       return {
           id:String(product.Id.Value),
           count:product.productCount,
           name:product.productName,
           price:product.productPrice
       }

    }
     
 
}