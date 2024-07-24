

import { Injectable } from "@nestjs/common";
import { IProductCategoryRepository } from "src/Domain/ProductCategory/Repository/IProductCategoryRepository";
 
@Injectable()
export class ProductCategoryRepository implements  IProductCategoryRepository{

    constructor() {
    }
    
    
}