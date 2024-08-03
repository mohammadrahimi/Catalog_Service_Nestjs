import { DeleteCategoryProductCommand } from "@Domain.Contract/Commands/CategoryProduct/Delete/DeleteCategoryProductCommand";
import { CategoryProductRepository } from "@Infrastructure/Persistence.TypeOrm/Repository/CategoryProduct/CategoryProductRepository";
import { Inject, Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

 
@CommandHandler(DeleteCategoryProductCommand)
export class DeleteCategoryProductCommandHandler implements ICommandHandler<DeleteCategoryProductCommand> {
    constructor(
         private readonly CategoryProductRepository: CategoryProductRepository
      ){}
  async execute(command: DeleteCategoryProductCommand): Promise<any> {
    await this.CategoryProductRepository.Delete(command.categoryProductId);
  }
}