import { IQuery } from "@nestjs/cqrs";


export class ListCategoryProductQuery implements IQuery {
    constructor(
        public page: number = 1,
        public pageSize: number = 10
      ) { }
}