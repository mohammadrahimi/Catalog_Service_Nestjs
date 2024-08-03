import { PriceDto } from "@Domain.Contract/Dto/Product/PriceDto";
 

export class ListProductWithCategoryQueryResult   {
    productId: string;
    productName: string;
    productCount: number;
    productPrice: PriceDto;
    categoryProductId: string;
    categoryProductName: string;

    constructor(
        productId: string,
        productName: string,
        productCount:number,
        productPrice: PriceDto,
        categoryProductId: string,
        categoryProductName: string,
    ) {
    this.productId = productId;
    this.productName = productName;
    this.productCount = productCount;
    this.productPrice = productPrice;
    this.categoryProductId=categoryProductId;
    this.categoryProductName= categoryProductName;

    }


}