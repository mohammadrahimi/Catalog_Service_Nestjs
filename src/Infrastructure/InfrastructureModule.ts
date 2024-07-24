
import { Module } from '@nestjs/common';
import { RepositoryModule } from './Persistence.TypeOrm/Repository/RepositoryModule';
 

@Module({
     imports:[RepositoryModule],
     providers:[],
     exports:[RepositoryModule]
})


export class InfrastructureModule {}