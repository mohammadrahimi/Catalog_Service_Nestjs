import { Module } from '@nestjs/common';
import { ProductController } from './Controllers/product.controller';
import { BusModule } from 'src/Framework.Core/BusModule/Bus.Module';

 

@Module({
  imports: [BusModule],
  controllers: [ProductController],
  exports:[ProductController]
})
export class ApiModule {}
