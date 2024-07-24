
import { Provider } from "@nestjs/common";
import { MapCommandHandlers } from "../Bus/MapCommandHandlers";


export const MapCommandHandlersProvider : Provider = {
    provide: 'MapCommandHandlersProvider',
    useClass: MapCommandHandlers
}