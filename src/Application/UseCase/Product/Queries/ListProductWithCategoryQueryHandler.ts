


import { ListProductWithCategoryQuery } from "@Domain.Contract/Queries/Product/ListProductWithCategory/ListProductWithCategoryQuery";
import { ProductsEntity } from "@Infrastructure/Persistence.TypeOrm/Entity/Product.Entity";
import { ProductRepository } from "@Infrastructure/Persistence.TypeOrm/Repository/Product/ProductRepository";
 
import {   IQueryHandler, QueryHandler } from "@nestjs/cqrs";
 
 
@QueryHandler(ListProductWithCategoryQuery)
export class ListProductWithCategoryQueryHandler implements IQueryHandler<ListProductWithCategoryQuery> {
    constructor(
      private readonly productRepository: ProductRepository
      ){}

  async execute(query: ListProductWithCategoryQuery): Promise<ProductsEntity[]> {
    return await this.productRepository.All(query.page,query.pageSize);
  }
}