import { Inject, Injectable } from "@nestjs/common";
import { CreateProductCommand } from "src/Domain.Contract/Commands/Product/Create/CreateProductCommand";
import { CreateProductCommandResult } from "src/Domain.Contract/Commands/Product/Create/CreateProductCommandResult";
import { PriceDto } from "src/Domain.Contract/Dto/Product/PriceDto";
import { Product } from "src/Domain/Product/Product";
import { ICommandHandler } from "src/Framework.Core/Bus/ICommadnHandler";
import { ICommand } from "src/Framework.Core/Bus/ICommand";
import { ProductRepository } from "src/Infrastructure/Persistence.TypeOrm/Repository/Product/ProductRepository";

@Injectable()
export class CreateProductCommandHandler implements ICommandHandler<CreateProductCommand,CreateProductCommandResult> {
    constructor(
        @Inject("ProductRepo")
        private readonly productRepository: ProductRepository
      ){}

        RegisterCommand(): ICommand {
           return CreateProductCommand;
        }

       async Handle(command: CreateProductCommand): Promise<CreateProductCommandResult> {

            var product = Product.create(command);
            
            await this.productRepository.Insert(product);

            return new CreateProductCommandResult("success", "customer saved.");
        }
  }