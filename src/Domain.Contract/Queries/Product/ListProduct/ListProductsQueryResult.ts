import { PriceDto } from "@Domain.Contract/Dto/Product/PriceDto";
 

export class ListProductsQueryResult   {
    productName: string;
    productCount: number;
    productPrice: PriceDto;
    categoryProductId: string;

    constructor(productName: string,
        productCount:number,
        productPrice: PriceDto,
        categoryProductId: string,
    ) {
    this.productName = productName;
    this.productCount = productCount;
    this.productPrice = productPrice;
    this.categoryProductId=categoryProductId;
    }


}