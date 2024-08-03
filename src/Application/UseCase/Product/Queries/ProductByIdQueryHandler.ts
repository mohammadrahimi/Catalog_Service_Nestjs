

 
import { ProductByIdQuery } from "@Domain.Contract/Queries/Product/ByIdProduct/ProductByIdQuery";
import { ProductsEntity } from "@Infrastructure/Persistence.TypeOrm/Entity/Product.Entity";
import { ProductRepository } from "@Infrastructure/Persistence.TypeOrm/Repository/Product/ProductRepository";
 
import {   IQueryHandler, QueryHandler } from "@nestjs/cqrs";
 
 
@QueryHandler(ProductByIdQuery)
export class ProductByIdQueryHandler implements IQueryHandler<ProductByIdQuery> {
    constructor(
      private readonly productRepository: ProductRepository
      ){}

  async execute(query: ProductByIdQuery): Promise<ProductsEntity> {
    return await this.productRepository.ProductByID(query.id);
  }
}