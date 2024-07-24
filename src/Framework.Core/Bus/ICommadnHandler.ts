import { ICommand } from "./ICommand";
import { ICommandResult } from "./ICommandResult";


export interface ICommandHandler<TCommand extends  ICommand , TCommandResult extends  ICommandResult> {
     RegisterCommand(): ICommand;
     Handle(command: TCommand): Promise<TCommandResult>;
}


   