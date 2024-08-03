import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_PORT } from '@Framework.Core/configApp/constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

 
 
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  //app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
  .setTitle('Catalog Service Api ')
  .setDescription('The API Sync Catalog Swagger')
  .setVersion('1.0.0')
  .build();
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: false,
  });
  SwaggerModule.setup('swagger', app, document);

  
  await app.listen(APP_PORT);

}
bootstrap();
