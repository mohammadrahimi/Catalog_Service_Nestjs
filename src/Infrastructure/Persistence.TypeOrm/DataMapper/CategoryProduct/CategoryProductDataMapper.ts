import { Injectable } from "@nestjs/common";
import { IDataMapper } from "@Framework.Core/DataMapper/IDataMapper";
import { CategoryProduct } from "@Domain/ProductCategory/CategoryProduct";
import { CategoryProductEntity } from "@Infrastructure/Persistence.TypeOrm/Entity/CategoryProduct.Entity";
 


@Injectable()
export class CategoryProductDataMapper implements IDataMapper<CategoryProduct,CategoryProductEntity> {
    toDomain(entity: CategoryProductEntity): CategoryProduct {
       
        return CategoryProduct.create({
            categoryProductName:entity.name,
           
        });

    }
    toDomainEntity(categoryproduct: CategoryProduct): CategoryProductEntity {

       return {
           id:String(categoryproduct.Id.Value),
           Products:null,
           name:categoryproduct.categoryProductName,
       }

    }
     
 
}