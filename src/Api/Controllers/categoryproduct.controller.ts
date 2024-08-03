

import { CreateCategoryProductCommand } from '@Domain.Contract/Commands/CategoryProduct/Create/CreateCategoryProductCommand';
import { ListCategoryProductQuery } from '@Domain.Contract/Queries/CategoryProduct/ListCategoryProduct/ListCategoryProductQuery';
import { CreateCategoryProductVM } from '@Domain.Contract/VM/CategoryProduct/CreateCategoryProductVM';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { json } from 'express';
 
@Controller("CategoryProduct")
export class CategoryProductController {
  constructor( 
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
 

  @Get("AllCategory")
  async  AllCategory(): Promise<any> {
     var query=new ListCategoryProductQuery(1,20);
     return  await this.queryBus.execute(query);
  }
 
 @Post("CreateCategoryProduct")
 async CreateCategoryProduct(@Body() req: CreateCategoryProductVM): Promise<any> {
      var catgory=new CreateCategoryProductCommand(req.name);
      await this.commandBus.execute(catgory);
      return {"state":"ok Create"}
  }

 @Get("ById")
 async ById( ): Promise<void> {
     console.log(" byid CategoryProduct  =" );
  }
}
