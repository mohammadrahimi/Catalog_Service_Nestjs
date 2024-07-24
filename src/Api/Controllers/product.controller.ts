

import { Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateProductCommand } from 'src/Domain.Contract/Commands/Product/Create/CreateProductCommand';
import { PriceDto } from 'src/Domain.Contract/Dto/Product/PriceDto';
import { CommandBus } from 'src/Framework.Core/Bus/CommandBus';
 

@Controller()
export class ProductController {
  constructor( 
     @Inject("CommandBus")
     private readonly commandBus: CommandBus,
  ) {}
 

  @Get()
    CreateProduct(): void {
      var productCommand:CreateProductCommand  = new CreateProductCommand(
         "Tv LG",2, new PriceDto(100000,"rial"));
    
      var result= this.commandBus.Send(productCommand);
      console.log(result);
      
  }
}
