import { inject, injectable } from "inversify";
import { DeleteProductCommand } from "src/Domain.Contract/Commands/Product/Delete/DeleteProductCommand";
import { DeleteProductCommandResult } from "src/Domain.Contract/Commands/Product/Delete/export class  DeleteProductCommandResult implements ICommandResult{";
import { ICommandHandler } from "src/Framework.Core/Bus/ICommadnHandler";
import { ICommand } from "src/Framework.Core/Bus/ICommand";
import { ProductRepository } from "src/Infrastructure/Persistence.TypeOrm/Repository/Product/ProductRepository";

@injectable()
export class DeleteProductCommandHandler implements ICommandHandler<DeleteProductCommand,DeleteProductCommandResult> {
    constructor(
        //@inject("ProductRepo")
        //private readonly productRepository: ProductRepository
      ){}

        RegisterCommand(): ICommand {
           return DeleteProductCommand;
        }

       async Handle(command: DeleteProductCommand): Promise<DeleteProductCommandResult> {

            
            //await this.productRepository.Delete(command.productId);

            return new DeleteProductCommandResult("success", "product saved.");
        }
  }