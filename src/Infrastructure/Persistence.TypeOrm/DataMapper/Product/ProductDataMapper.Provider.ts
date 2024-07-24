import { Provider } from "@nestjs/common";
import { ProductDataMapper } from "./ProductDataMapper";



export const ProductDataMapperProvider : Provider = {
    provide: 'ProductDataMapper',
    useClass: ProductDataMapper
}