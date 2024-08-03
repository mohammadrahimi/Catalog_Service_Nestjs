
 
import { CreateProductCommand } from '@Domain.Contract/Commands/Product/Create/CreateProductCommand';
import { PriceDto } from '@Domain.Contract/Dto/Product/PriceDto';
import { ProductByIdQuery } from '@Domain.Contract/Queries/Product/ByIdProduct/ProductByIdQuery';
import { ListProductsQuery } from '@Domain.Contract/Queries/Product/ListProduct/ListProductsQuery';
import { ListProducByCategoryIdQuery } from '@Domain.Contract/Queries/Product/ListProductWithCategory/ListProducByCategoryIdQuery';
import { ListProductWithCategoryQuery } from '@Domain.Contract/Queries/Product/ListProductWithCategory/ListProductWithCategoryQuery';
import { CreateProductVMResponse } from '@Domain.Contract/VM/Product/CreateProductResponse';
import { CreateProductVM } from '@Domain.Contract/VM/Product/CreateProductVM';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
 
@Controller("Product")
export class ProductController {
  constructor( 
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
 

  @Get("All")
  async All(): Promise<any> {
     var query=new ListProductWithCategoryQuery(1,20);
     return await this.queryBus.execute(query);
  }

  @Get("AllProduct")
  async AllProduct(): Promise<any> {
     var query=new ListProductsQuery(1,20);
     return  await this.queryBus.execute(query);
  }

  @Get('/:id')
  async ByIdProduct(@Param('id') id: string): Promise<any> {
   var query=new ProductByIdQuery(id);
   return  await this.queryBus.execute(query);
  }
  
  @Post("ByCategoryId")
  async ByCategoryId(@Body() req: ProductByIdQuery): Promise<any> {  
      var query=new ListProducByCategoryIdQuery(req.id,1,20);
      return  await this.queryBus.execute(query);
  }

  @Post("CreateProduct")
  async CreateProduct(@Body() req: CreateProductVM): Promise<CreateProductVMResponse> {
     
    var product=new CreateProductCommand(req.productName,req.productCount,
         new PriceDto(req.productPrice.amount,req.productPrice.currency),
            req.categoryProductId);

      await  this.commandBus.execute(product);
 
      return { state:"200",message:"Product Is Create."};
    }
}
