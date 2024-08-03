


import { IQuery } from "@nestjs/cqrs";


export class ListProducByCategoryIdQuery implements IQuery {
    constructor(
        public CategoryId: string,
        public page: number = 1,
        public pageSize: number = 10,
      ) { }
}