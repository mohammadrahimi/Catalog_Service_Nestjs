

import { CategoryProduct } from "@Domain/ProductCategory/CategoryProduct";
import { ICategoryProductRepository } from "@Domain/ProductCategory/Repository/ICategoryProductRepository";
import { IDataMapper } from "@Framework.Core/DataMapper/IDataMapper";
import { CategoryProductEntity } from "@Infrastructure/Persistence.TypeOrm/Entity/CategoryProduct.Entity";
import { Inject, Injectable } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
 
@Injectable()
export class CategoryProductRepository implements  ICategoryProductRepository{

    constructor(
        @InjectDataSource() private readonly datasource : DataSource ,
        @Inject("CategoryProductDataMapper") private readonly CategoryProductDataMapper: IDataMapper<CategoryProduct,CategoryProductEntity>
    ) {}
    
    async Insert(categoryProduct: CategoryProduct): Promise<void> {
        var domainEntity : CategoryProductEntity = this.CategoryProductDataMapper.toDomainEntity(categoryProduct);
        await this.datasource.getRepository(CategoryProductEntity).save(domainEntity);
    }
    Delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
   
    async FindAll(page:number , pageSize:number): Promise<CategoryProductEntity[]> {
        const categoryproducts = await this.datasource
        .getRepository(CategoryProductEntity)
        .createQueryBuilder("categoryproduct")
        .select("categoryproduct.id")
        .addSelect("categoryproduct.name")
        .skip((page-1)*pageSize)
        .take(pageSize)
        .getMany();
        return categoryproducts;
    }
    async FindById(id: string): Promise<CategoryProduct> {
        const categoryproduct = await this.datasource
        .getRepository(CategoryProductEntity)
        .createQueryBuilder("categoryproduct")
        .select("categoryproduct.id")
        .addSelect("categoryproduct.name")
        .where("categoryproduct.id = :id", { id:  id })
        .getOne();
        var domain  : CategoryProduct  = this.CategoryProductDataMapper.toDomain(categoryproduct);
        return domain;
    }
       
}