import { Injectable } from "@nestjs/common";
import { CommandNotRegisteredError } from "./CommandNotRegisteredError";
import { ICommandHandler } from "./ICommadnHandler";
import { ICommand } from "./ICommand";
import { ICommandResult } from "./ICommandResult";

@Injectable()
export class MapCommandHandlers extends Map<ICommand, ICommandHandler<ICommand,ICommandResult>> {
    constructor(commandHandlers: Array<ICommandHandler<ICommand,ICommandResult>>) {
      super();
   
      commandHandlers.forEach(commandHandler => {
        this.set(commandHandler.RegisterCommand(), commandHandler);
      });
    }
  
    public get(command: ICommand): ICommandHandler<ICommand,ICommandResult> {
      const commandHandler = super.get(command.constructor);
  
      if (!commandHandler) {
        throw new CommandNotRegisteredError(command);
      }
  
      return commandHandler;
    }
  }