import { ICommand } from "./ICommand";

export class CommandNotRegisteredError extends Error {
    constructor(command: ICommand) {
      super(`The command <${command.constructor.name}> hasn't a command handler associated`);
    }
  }
  