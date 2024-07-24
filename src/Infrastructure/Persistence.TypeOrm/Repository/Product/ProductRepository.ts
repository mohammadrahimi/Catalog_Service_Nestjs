import { Inject, Injectable } from "@nestjs/common";
import { Product } from "src/Domain/Product/Product";
import { IProductRepository } from "src/Domain/Product/Repository/IProductRepository";
import { IDataMapper } from "src/Framework.Core/DataMapper/IDataMapper";
import { ProductsEntity } from "../../Entity/Product.Entity";
import { DataSource } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";
 

@Injectable()
export class ProductRepository implements IProductRepository{

    constructor(
        @InjectDataSource() private readonly datasource : DataSource ,
        @Inject("ProductDataMapper") private readonly productDataMapper: IDataMapper<Product,ProductsEntity>
    ) {}
    
    
    async Insert(product: Product): Promise<void> {
         var domainEntity : ProductsEntity = this.productDataMapper.toDomainEntity(product);
         await this.datasource.getRepository(ProductsEntity).save(domainEntity);
    }
    Delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    FindAll(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    FindById(id: string): Promise<Product | null> {
        throw new Error("Method not implemented.");
    }
}