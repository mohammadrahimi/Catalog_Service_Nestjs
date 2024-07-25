import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {APP_PORT} from "configApp/constants";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Container, interfaces } from 'inversify';
import { MapCommandHandlers } from './Framework.Core/Bus/MapCommandHandlers';
import { TYPES } from './Framework.Core/Bus/TYPES';
import { ICommandHandler } from './Framework.Core/Bus/ICommadnHandler';
import { ICommand } from './Framework.Core/Bus/ICommand';
import { ICommandResult } from './Framework.Core/Bus/ICommandResult';
import { CreateProductCommandHandler } from './Application/UseCase/Product/Commands/CreateProductCommandHandler';
import { DeleteProductCommandHandler } from './Application/UseCase/Product/Commands/DeleteProductCommandHandler';
import { IProductRepository } from './Domain/Product/Repository/IProductRepository';
import { ProductRepository } from './Infrastructure/Persistence.TypeOrm/Repository/Product/ProductRepository';
import { IProductCategoryRepository } from './Domain/ProductCategory/Repository/IProductCategoryRepository';
import { ProductCategoryRepository } from './Infrastructure/Persistence.TypeOrm/Repository/ProductCategory/ProductCategoryRepository';
 
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  const container = new Container();
  const handlers  = new Array<ICommandHandler<ICommand,ICommandResult>>();


  container.bind<ICommandHandler<ICommand,ICommandResult>>(TYPES.CommandHandler).to(CreateProductCommandHandler).inSingletonScope();
  container.bind<ICommandHandler<ICommand,ICommandResult>>(TYPES.CommandHandler).to(DeleteProductCommandHandler).inSingletonScope();


  container.getAll<ICommandHandler<ICommand,ICommandResult>>(TYPES.CommandHandler).forEach((handler: ICommandHandler<ICommand,ICommandResult>) => {
    handlers.push(handler);
  });

  container.bind<MapCommandHandlers>(TYPES.MapCommandHandlers).toConstantValue(new MapCommandHandlers(handlers));

 
  container.bind<IProductRepository>(TYPES.ProductRepository).to(ProductRepository).inSingletonScope();
  container.bind<IProductCategoryRepository>(TYPES.CategoryProductRepo).to(ProductCategoryRepository);



  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
  .setTitle('catalog')
  .setDescription('The API description')
  .setVersion('1.0.0')
  .build();
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: false,
  });
  SwaggerModule.setup('swagger', app, document);

  await app.listen(APP_PORT);

}
bootstrap();
