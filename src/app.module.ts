import { Module } from '@nestjs/common';
import { InfrastructureModule } from './Infrastructure/InfrastructureModule';
import { DatabaseModule } from './Infrastructure/DataBase/Database.Module';
import { ApiModule } from './Api/Api.Module';
import { ProductController } from './Api/Controllers/product.controller';
import { BusModule } from './Framework.Core/BusModule/Bus.Module';
 

@Module({
  imports: [BusModule,DatabaseModule,InfrastructureModule],
  controllers: [ProductController],
  providers: [],
})
export class AppModule {}
