import { CreateCategoryProductCommand } from "@Domain.Contract/Commands/CategoryProduct/Create/CreateCategoryProductCommand";
import { CategoryProduct } from "@Domain/ProductCategory/CategoryProduct";
import { CategoryProductRepository } from "@Infrastructure/Persistence.TypeOrm/Repository/CategoryProduct/CategoryProductRepository";
 
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
 
 
@CommandHandler(CreateCategoryProductCommand)
export class CreateCategoryProductCommandHandler implements ICommandHandler<CreateCategoryProductCommand> {
    constructor(
        private readonly categoryProductRepository: CategoryProductRepository
      ){}

  async execute(command: CreateCategoryProductCommand): Promise<any> {
            var categoryproduct = CategoryProduct.create(command);
            await this.categoryProductRepository.Insert(categoryproduct);
  }
}