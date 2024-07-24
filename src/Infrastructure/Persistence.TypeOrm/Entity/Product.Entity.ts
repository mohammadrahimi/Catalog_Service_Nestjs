import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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

}