import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ProductsEntity } from "./Product.Entity";

@Entity({name:'CategoryProduct'})
export class CategoryProductEntity { 
 
    
    @Column({type:"uuid",nullable:false, unique:true, primary:true})
    id : string;

    @Column({type:"nvarchar", length:200,nullable:false}) // length:"max" , unique:true
    name : string;

    @OneToMany(() => ProductsEntity, (product) => product.categoryProduct,{
        cascade: true   })
    Products: ProductsEntity[]

}