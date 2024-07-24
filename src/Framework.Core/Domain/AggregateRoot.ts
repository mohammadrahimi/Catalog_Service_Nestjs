import { IDomainEvent } from "../Bus/IDomainEvent";
import { Entity } from "./Entity";
import { IAggregateRoot } from "./IAggregateRoot";

export abstract class AggregateRoot<TId> extends Entity<TId> implements IAggregateRoot {
    
    private readonly _domainEvents: Array<IDomainEvent>= new  Array<IDomainEvent>() ;
 
   
    constructor(id: TId ) {
        super(id);
    }

    public   GetChangesDomainEvents() : Array<IDomainEvent> {
        return this._domainEvents;
    }

    protected  AddEventChanges( event : IDomainEvent): void {
        this._domainEvents.push(event); 
    }
    public ClearDomainEvents(): void {
        if(this._domainEvents.length > 0)
           this._domainEvents.slice(0,this._domainEvents.length);
    }
    
}