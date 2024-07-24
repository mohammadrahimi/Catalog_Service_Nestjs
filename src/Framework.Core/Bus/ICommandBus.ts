import { ICommand } from "./ICommand";
import { ICommandResult } from "./ICommandResult";

 

export interface ICommandBus  {
    Send(command: ICommand) : Promise<ICommandResult>;
}