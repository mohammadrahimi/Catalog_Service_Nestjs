import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { ProductsEntity } from "../Persistence.TypeOrm/Entity/Product.Entity";
 
export const DataBaseProvider : Provider = 
    {
      provide: DataSource, 
      inject: [],
      useFactory: async () => {
        
        try {
          const dataSource = new DataSource({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                connectTimeout: 60 * 60 * 1000,
                database: process.env.DB_NAME,
                synchronize: false,
                entities: [ProductsEntity],  //
                //entities: [__dirname + '/../**/*.entity.{js,ts}'],
          });
              
                await dataSource.initialize();
                console.log('Database connected successfully.');
                return dataSource;
              
        } catch (error) {
                 console.log('Error connecting to database');
              throw error;
        }
      },
    } 
  ;