import { Module } from "@nestjs/common";
import { ProductDataMapperProvider } from "./ProductDataMapper.Provider";
 
@Module({
    imports:[],
    providers:[ProductDataMapperProvider],
    exports:[ProductDataMapperProvider]
})


export class DataMapperModule{}