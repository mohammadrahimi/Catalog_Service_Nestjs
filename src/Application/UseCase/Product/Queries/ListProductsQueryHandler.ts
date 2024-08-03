


import {  ListProductsQuery } from "@Domain.Contract/Queries/Product/ListProduct/ListProductsQuery";
import { ListProductsQueryResult } from "@Domain.Contract/Queries/Product/ListProduct/ListProductsQueryResult";
import { ProductRepository } from "@Infrastructure/Persistence.TypeOrm/Repository/Product/ProductRepository";
 
import {   IQueryHandler, QueryHandler } from "@nestjs/cqrs";
 
 
@QueryHandler(ListProductsQuery)
export class ListProductsQueryHandler implements IQueryHandler<ListProductsQuery> {
    constructor(
        private readonly productRepository: ProductRepository
      ){}

  async execute(query: ListProductsQuery): Promise<any[]> {
     return await this.productRepository.FindAll(query.page,query.pageSize);
  }
}