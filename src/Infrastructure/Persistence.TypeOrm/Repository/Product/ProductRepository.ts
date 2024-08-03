import { Inject, Injectable } from "@nestjs/common";
import { ProductsEntity } from "../../Entity/Product.Entity";
import { DataSource } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";
import { IProductRepository } from "@Domain/Product/Repository/IProductRepository";
import { Product } from "@Domain/Product/Product";
import { IDataMapper } from "@Framework.Core/DataMapper/IDataMapper";
 
 
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

    async ProductByID(id: string): Promise<ProductsEntity> {
        const  _products = await this.datasource
        .getRepository(ProductsEntity)
        .createQueryBuilder("products")
        .innerJoinAndSelect("products.categoryProduct", "categoryProduct" )
        .where("products.id= :id", { id: id })
        .getOne();
        
        return _products;
    }

    async AllByCategoryID(categoryId: string ,page: number, pageSize: number): Promise<ProductsEntity[]> {
        const  _products = await this.datasource
        .getRepository(ProductsEntity)
        .createQueryBuilder("products")
        .innerJoinAndSelect("products.categoryProduct", "categoryProduct" )
        .where("products.categoryProductId = :categoryProductId", { categoryProductId : categoryId })
        .skip((page-1)*pageSize)
        .take(pageSize)
        .getMany();
       return _products;
    }
    async All(page: number, pageSize: number): Promise<ProductsEntity[]> {
        
            const  _products = await this.datasource
            .getRepository(ProductsEntity)
            .createQueryBuilder("products")
            .innerJoinAndSelect("products.categoryProduct", "categoryProduct" )
            .skip((page-1)*pageSize)
            .take(pageSize)
            .getMany();
             return _products;
    }

    async FindAll(page:number , pageSize:number): Promise<ProductsEntity[]> {
        const products = await this.datasource
        .getRepository(ProductsEntity)
        .createQueryBuilder("products")
        .select("products.id")
        .addSelect("products.name")
        .skip(page)
        .take(pageSize)
        .getMany();
        return products;
    }
    async FindById(id: string): Promise<ProductsEntity> {
        const  _products = await this.datasource
        .getRepository(ProductsEntity)
        .createQueryBuilder("products")
        .innerJoinAndSelect("products.categoryProduct", "categoryProduct" )
        .where("products.id= :id", { id: id })
        .getOne();
        return _products;
    }
}