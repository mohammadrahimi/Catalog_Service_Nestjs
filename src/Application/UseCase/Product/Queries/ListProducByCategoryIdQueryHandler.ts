
 
import { ListProducByCategoryIdQuery } from "@Domain.Contract/Queries/Product/ListProductWithCategory/ListProducByCategoryIdQuery";
import { ProductsEntity } from "@Infrastructure/Persistence.TypeOrm/Entity/Product.Entity";
import { ProductRepository } from "@Infrastructure/Persistence.TypeOrm/Repository/Product/ProductRepository";
 
import {   IQueryHandler, QueryHandler } from "@nestjs/cqrs";
 
 
@QueryHandler(ListProducByCategoryIdQuery)
export class ListProducByCategoryIdQueryHandler implements IQueryHandler<ListProducByCategoryIdQuery> {
    constructor(
      private readonly productRepository: ProductRepository
      ){}

  async execute(query: ListProducByCategoryIdQuery): Promise<ProductsEntity[]> {
    return await this.productRepository.AllByCategoryID(query.CategoryId,query.page,query.pageSize);
  }
}