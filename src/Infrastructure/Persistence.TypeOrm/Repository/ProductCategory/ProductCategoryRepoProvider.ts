import { Provider } from "@nestjs/common";
import { ProductCategoryRepository } from "./ProductCategoryRepository";


export const ProductCategoryRepoProvider : Provider ={
    provide:'ProductCategoryRepo',
    useClass: ProductCategoryRepository
}