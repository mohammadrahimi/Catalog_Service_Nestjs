import { PriceVM } from "./PriceVM";

 
export class CreateProductVM {
    

    productName: string;
    productCount: number;
    productPrice: PriceVM;
    categoryProductId: string;

    constructor(productName: string,
        productCount:number,
        productPrice: PriceVM,
        categoryProductId: string,
    ) {
    this.productName = productName;
    this.productCount = productCount;
    this.productPrice = productPrice;
    this.categoryProductId=categoryProductId;
    }

}