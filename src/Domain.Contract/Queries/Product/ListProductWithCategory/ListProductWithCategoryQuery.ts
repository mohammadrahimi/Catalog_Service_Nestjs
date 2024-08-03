

import { IQuery } from "@nestjs/cqrs";


export class ListProductWithCategoryQuery implements IQuery {
    constructor(
        public page: number = 1,
        public pageSize: number = 10
        
      ) { }
}