import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { CategoryProductEntity } from "./CategoryProduct.Entity";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";

@Entity({name:'Products'})
export class ProductsEntity { 
 
    //@PrimaryGeneratedColumn({type:'bigint'})
    //id: number;

    @Column({type:"uuid",nullable:false, unique:true, primary:true})
    id : string;

    @Column({type:"nvarchar", length:200,nullable:false}) // length:"max" , unique:true
    name : string;

    @Column({type:"int",nullable:false , default:0})
    count : number;

    @Column({type:"simple-json"})
    price: {Amount:number,Currency:string};

    
    @Column({ type:"uuid", nullable:false })
    categoryProductId: string;

    @ManyToOne( () =>  CategoryProductEntity, (categoryProduct) => categoryProduct.Products )
    @JoinColumn({ name: "categoryProductId" })
    categoryProduct: CategoryProductEntity;

}