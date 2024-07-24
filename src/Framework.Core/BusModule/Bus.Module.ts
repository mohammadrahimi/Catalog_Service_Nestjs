
import { Module } from "@nestjs/common";
import { CommandBusProvider } from "./CommandBus.Provider";
import { MapCommandHandlersProvider } from "./MapCommandHandlers.Provider";
 

@Module({
    imports:[],
    providers:[MapCommandHandlersProvider,CommandBusProvider],
    exports:[MapCommandHandlersProvider,CommandBusProvider]
})


export class BusModule{}