


import {  ListCategoryProductQuery } from "@Domain.Contract/Queries/CategoryProduct/ListCategoryProduct/ListCategoryProductQuery";
import { CategoryProductEntity } from "@Infrastructure/Persistence.TypeOrm/Entity/CategoryProduct.Entity";
import { CategoryProductRepository } from "@Infrastructure/Persistence.TypeOrm/Repository/CategoryProduct/CategoryProductRepository";
 
import {   IQueryHandler, QueryHandler } from "@nestjs/cqrs";
 
 
@QueryHandler(ListCategoryProductQuery)
export class ListCategoryProductsQueryHandler implements IQueryHandler<ListCategoryProductQuery> {
    constructor(
        private readonly categoryProductRepository: CategoryProductRepository
      ){}

  async execute(query: ListCategoryProductQuery): Promise<CategoryProductEntity[]> {
    return  await this.categoryProductRepository.FindAll(query.page,query.pageSize);
  }
}