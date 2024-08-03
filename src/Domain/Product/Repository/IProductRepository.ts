import { Product } from "../Product";
import { ProductsEntity } from "@Infrastructure/Persistence.TypeOrm/Entity/Product.Entity";
 

export interface IProductRepository{
 
    Insert(product: Product): Promise<void>;
    Delete(id: string): Promise<void>;
    All(page:number , pageSize:number): Promise<ProductsEntity[]>;
    AllByCategoryID(CategoryId: string ,page:number , pageSize:number): Promise<ProductsEntity[]>;
    FindAll(page:number , pageSize:number): Promise<ProductsEntity[]>;
    FindById(id: string): Promise<ProductsEntity>;
    ProductByID(id: string): Promise<ProductsEntity>;

}