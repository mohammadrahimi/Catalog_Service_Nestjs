import { Inject, Injectable } from "@nestjs/common";
import { ICommand } from "./ICommand";
import { ICommandBus } from "./ICommandBus";
import { ICommandResult } from "./ICommandResult";
import { MapCommandHandlers } from "./MapCommandHandlers";


@Injectable()
export class CommandBus implements ICommandBus{

   constructor(
    @Inject("MapCommandHandlersProvider")
    private mapCommandHandlers: MapCommandHandlers) {}


   async Send(command: ICommand): Promise<ICommandResult> {

        const handler = this.mapCommandHandlers.get(command);
        return await handler.Handle(command);

    }

}