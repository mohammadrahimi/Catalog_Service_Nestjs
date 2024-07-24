
import { Global, Module } from '@nestjs/common';
import { DataBaseProvider  } from './database.provider';
 
@Global()
@Module({
  
  providers: [DataBaseProvider],
  exports: [DataBaseProvider],
})
export class DatabaseModule {}