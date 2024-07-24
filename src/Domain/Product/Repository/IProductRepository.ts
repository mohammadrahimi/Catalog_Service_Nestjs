import { Product } from "../Product";


export interface IProductRepository{
 
    Insert(product: Product): Promise<void>;
    Delete(id: string): Promise<void>;
    FindAll(): Promise<Product[]>;
    FindById(id: string): Promise<Product | null>;

}