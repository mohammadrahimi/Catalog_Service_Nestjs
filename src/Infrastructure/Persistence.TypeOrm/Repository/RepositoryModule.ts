import { Module } from "@nestjs/common";
import { DataMapperModule } from "../DataMapper/Product/DataMapper.Module";
 
@Module({
    imports:[DataMapperModule],
   // providers:[ProductRepoProvider,ProductCategoryRepoProvider],
   // exports:[ProductRepoProvider,ProductCategoryRepoProvider]
})

export class RepositoryModule{}
