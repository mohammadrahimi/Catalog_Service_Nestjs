import { Module } from "@nestjs/common";
import { ProductRepoProvider } from "./Product/ProductRepoProvider";
import { ProductCategoryRepoProvider } from "./ProductCategory/ProductCategoryRepoProvider";
import { DataMapperModule } from "../DataMapper/Product/DataMapper.Module";
 
@Module({
    imports:[DataMapperModule],
    providers:[ProductRepoProvider,ProductCategoryRepoProvider],
    exports:[ProductRepoProvider,ProductCategoryRepoProvider]
})

export class RepositoryModule{}
