import { Injectable } from "@nestjs/common";
import { ProductsEntity } from "../../Entity/Product.Entity";
import { IDataMapper } from "@Framework.Core/DataMapper/IDataMapper";
import { Product } from "@Domain/Product/Product";
 


@Injectable()
export class ProductDataMapper implements IDataMapper<Product,ProductsEntity> {
    toDomain(entity: ProductsEntity): Product {
       
        return Product.create({
            productCount:entity.count,
            productName:entity.name,
            productPrice: {amount:entity.price.Amount,currency:entity.price.Currency},
            categoryProductId:entity.categoryProductId,

        });

    }
    toDomainEntity(product: Product): ProductsEntity {

       return {
           id:String(product.Id.Value),
           categoryProduct:null,
           categoryProductId:product.categoryProductId,
           count:product.productCount,
           name:product.productName,
           price:product.productPrice
       }

    }
     
 
}