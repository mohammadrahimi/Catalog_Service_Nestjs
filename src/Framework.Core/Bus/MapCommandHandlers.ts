import { Injectable } from "@nestjs/common";
import { CommandNotRegisteredError } from "./CommandNotRegisteredError";
import { ICommandHandler } from "./ICommadnHandler";
import { ICommand } from "./ICommand";
import { ICommandResult } from "./ICommandResult";
import { injectable } from "inversify";

 
export class MapCommandHandlers extends Map<ICommand, ICommandHandler<ICommand,ICommandResult>> {
     constructor(commandHandlers: Array<ICommandHandler<ICommand,ICommandResult>>){
      super();

      
          if(commandHandlers !=  undefined){
              console.log(" ===  in =="+ commandHandlers.map(x=>x.RegisterCommand.name));
              commandHandlers.map(x=>{
                this.set(x.RegisterCommand(),x);
              });
          }
          

     }
  
    public get(command: ICommand): ICommandHandler<ICommand,ICommandResult> {
     
        const commandHandler = super.get(command.constructor);
    
        if (!commandHandler) {
          throw new CommandNotRegisteredError(command);
        }
    
          return commandHandler;
       
    }
       
  }