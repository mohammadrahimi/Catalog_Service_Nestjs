import { DeleteProductCommand } from "@Domain.Contract/Commands/Product/Delete/DeleteProductCommand";
import { ProductRepository } from "@Infrastructure/Persistence.TypeOrm/Repository/Product/ProductRepository";
import { Inject, Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

 
@CommandHandler(DeleteProductCommand)
export class DeleteProductCommandHandler implements ICommandHandler<DeleteProductCommand> {
    constructor(
         private readonly productRepository: ProductRepository
      ){}
  async execute(command: DeleteProductCommand): Promise<any> {
    await this.productRepository.Delete(command.productId);
  }
}