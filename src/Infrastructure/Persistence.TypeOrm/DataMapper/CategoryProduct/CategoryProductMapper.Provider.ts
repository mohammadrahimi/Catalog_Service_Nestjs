import { Provider } from "@nestjs/common";
import { CategoryProductDataMapper } from "./CategoryProductDataMapper";
 

export const CategoryProductMapperProvider : Provider = {
    provide: 'CategoryProductDataMapper',
    useClass: CategoryProductDataMapper
}