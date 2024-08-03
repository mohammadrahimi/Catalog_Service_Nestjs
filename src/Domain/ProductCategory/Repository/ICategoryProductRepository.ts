import { CategoryProductEntity } from "@Infrastructure/Persistence.TypeOrm/Entity/CategoryProduct.Entity";
import { CategoryProduct } from "../CategoryProduct";



 
export interface ICategoryProductRepository{
 
    Insert(categoryProduct: CategoryProduct): Promise<void>;
    Delete(id: string): Promise<void>;
     
    FindAll(page:number , pageSize:number): Promise<CategoryProductEntity[]>;
    FindById(id: string): Promise<CategoryProduct>;
}