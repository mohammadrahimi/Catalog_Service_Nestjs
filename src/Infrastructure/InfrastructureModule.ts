
import { Module } from '@nestjs/common';
import { RepositoryModule } from './Persistence.TypeOrm/Repository/RepositoryModule';
import { CreateProductCommandHandler } from '@Application/UseCase/Product/Commands/CreateProductCommandHandler';
import { CreateCategoryProductCommandHandler } from '@Application/UseCase/CategoryProduct/Commands/CreateCategoryProductCommandHandler';
import { DeleteProductCommandHandler } from '@Application/UseCase/Product/Commands/DeleteProductCommandHandler';
import { DeleteCategoryProductCommandHandler } from '@Application/UseCase/CategoryProduct/Commands/DeleteCategoryProductCommandHandler';
import { ListProductsQueryHandler } from '@Application/UseCase/Product/Queries/ListProductsQueryHandler';
import { ListCategoryProductsQueryHandler } from '@Application/UseCase/CategoryProduct/Queries/ListCategoryProductsQueryHandler';
import { ListProductWithCategoryQueryHandler } from '@Application/UseCase/Product/Queries/ListProductWithCategoryQueryHandler';
import { ListProducByCategoryIdQueryHandler } from '@Application/UseCase/Product/Queries/ListProducByCategoryIdQueryHandler';
import { ProductByIdQueryHandler } from '@Application/UseCase/Product/Queries/ProductByIdQueryHandler';
 

@Module({
     imports:[RepositoryModule],
     providers:[
          CreateProductCommandHandler,
          DeleteProductCommandHandler,
          CreateCategoryProductCommandHandler,
          DeleteCategoryProductCommandHandler,
          ListProductsQueryHandler,
          ListCategoryProductsQueryHandler,
          ListProductWithCategoryQueryHandler,
          ListProducByCategoryIdQueryHandler,
          ProductByIdQueryHandler
     ],
     exports:[RepositoryModule,
          CreateProductCommandHandler,
          DeleteProductCommandHandler,
          CreateCategoryProductCommandHandler,
          DeleteCategoryProductCommandHandler,
          ListProductsQueryHandler,
          ListCategoryProductsQueryHandler,
          ListProductWithCategoryQueryHandler,
          ListProducByCategoryIdQueryHandler,
          ProductByIdQueryHandler

     ]
          
       
     
})
 

export class InfrastructureModule {}