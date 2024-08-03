import { Module } from '@nestjs/common';
import { InfrastructureModule } from './Infrastructure/InfrastructureModule';
import { ProductController } from './Api/Controllers/product.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CategoryProductController } from '@Api/Controllers/categoryproduct.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource_Mysql } from '@Infrastructure/DataBase/dataSource';
import { ConfigModule } from '@nestjs/config';
 
 

@Module({
  imports: [ 
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(DataSource_Mysql),
    CqrsModule,InfrastructureModule],
  controllers: [ProductController,CategoryProductController],  
  providers: [ ],
})
export class AppModule {
   
}
