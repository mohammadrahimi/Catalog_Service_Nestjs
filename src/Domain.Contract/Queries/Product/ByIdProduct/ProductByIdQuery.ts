

import { IQuery } from "@nestjs/cqrs";


export class ProductByIdQuery implements IQuery {
    constructor(
        public id: string
      ) { }
}