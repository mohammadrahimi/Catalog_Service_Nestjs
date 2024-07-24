import { Provider } from "@nestjs/common";
import { ProductRepository } from "./ProductRepository";



export const ProductRepoProvider : Provider = {
    provide: 'ProductRepo',
    useClass: ProductRepository
}