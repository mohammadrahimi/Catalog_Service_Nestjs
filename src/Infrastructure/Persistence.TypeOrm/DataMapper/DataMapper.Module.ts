import { Module } from "@nestjs/common";
import { CategoryProductMapperProvider } from "./CategoryProduct/CategoryProductMapper.Provider";
import { ProductDataMapperProvider } from "./Product/ProductDataMapper.Provider";
 
@Module({
    imports:[],
    providers:[ProductDataMapperProvider,CategoryProductMapperProvider],
    exports:[ProductDataMapperProvider,CategoryProductMapperProvider]
})


export class DataMapperModule{}