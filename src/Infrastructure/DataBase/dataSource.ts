import { CategoryProductEntity } from "@Infrastructure/Persistence.TypeOrm/Entity/CategoryProduct.Entity";
import { ProductsEntity } from "@Infrastructure/Persistence.TypeOrm/Entity/Product.Entity";
import { DataSource, DataSourceOptions } from "typeorm";

export const DataSource_Mysql: DataSourceOptions ={
    type: 'mysql',
    host: 'localhost' ,//process.env.DB_HOST,
    port: 3306, // parseInt(process.env.DB_PORT!),
    username: 'root' , //process.env.DB_USERNAME,
    password: '0000', // process.env.DB_PASSWORD,
    connectTimeout: 60 * 60 * 1000,
    database:'catalog', // process.env.DB_NAME,
    synchronize: false, 
    entities: [CategoryProductEntity,ProductsEntity],  
    migrations: ['../Migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrationsRun: true,
 
     
    
}

const dataSource = new DataSource(DataSource_Mysql)
export default dataSource