import { Provider } from "@nestjs/common";
import { CommandBus } from "../Bus/CommandBus";


export const CommandBusProvider : Provider = {
    provide: 'CommandBusProvider',
    useClass: CommandBus
}