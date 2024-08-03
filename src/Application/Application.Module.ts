
import { Module } from '@nestjs/common';
import { CreateProductCommandHandler } from '@Application/UseCase/Product/Commands/CreateProductCommandHandler';
import { CreateCategoryProductCommandHandler } from '@Application/UseCase/CategoryProduct/Commands/CreateCategoryProductCommandHandler';
import { DeleteProductCommandHandler } from '@Application/UseCase/Product/Commands/DeleteProductCommandHandler';
import { DeleteCategoryProductCommandHandler } from '@Application/UseCase/CategoryProduct/Commands/DeleteCategoryProductCommandHandler';
 

@Module({
     imports:[],
     providers:[
          CreateProductCommandHandler,DeleteProductCommandHandler,
          CreateCategoryProductCommandHandler,DeleteCategoryProductCommandHandler
     ],
     exports:[
          CreateProductCommandHandler,DeleteProductCommandHandler,
          CreateCategoryProductCommandHandler,DeleteCategoryProductCommandHandler
     ]
})


export class ApplicationModule {}