import { CreateProductCommand } from "@Domain.Contract/Commands/Product/Create/CreateProductCommand";
import { Product } from "@Domain/Product/Product";
import { ProductRepository } from "@Infrastructure/Persistence.TypeOrm/Repository/Product/ProductRepository";
 
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
 
 
@CommandHandler(CreateProductCommand)
export class CreateProductCommandHandler implements ICommandHandler<CreateProductCommand> {
    constructor(
        private readonly productRepository: ProductRepository
      ){}

  async execute(command: CreateProductCommand): Promise<any> {
            var product = Product.create(command);
            await this.productRepository.Insert(product);
  }
}