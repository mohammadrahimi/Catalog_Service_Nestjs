import { ICommandResult } from "@Framework.Core/Bus/ICommandResult";

 

export class  CreateProductCommandResult implements ICommandResult{
    
    state: string;
    message: string; 

    constructor(state: string, message:string) {
            this.state = state;
            this.message = message;
    }
}