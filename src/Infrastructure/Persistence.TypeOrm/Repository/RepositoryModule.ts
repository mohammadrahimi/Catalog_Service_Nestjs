import { Module } from "@nestjs/common";
import { ProductRepository } from "./Product/ProductRepository";
import { CategoryProductRepository } from "./CategoryProduct/CategoryProductRepository";
import { DataMapperModule } from "../DataMapper/DataMapper.Module";
 
@Module({
    imports:[DataMapperModule],
    providers:[ProductRepository,CategoryProductRepository],
    exports:[ProductRepository,CategoryProductRepository]
})

export class RepositoryModule{}
