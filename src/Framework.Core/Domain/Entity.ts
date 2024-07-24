import { shallowEqual } from "shallow-equal-object";
import { v4 as UUID } from 'uuid';


export abstract class Entity<TId>  {
  public readonly Id : TId;

  constructor(id?: TId) {
    this.Id  = id || UUID();
  }

  
  public equals (left?: Entity<TId> , right?: Entity<TId> ) : boolean {
    
    return shallowEqual(left, right)
  }

  public notequals (left?: Entity<TId> , right?: Entity<TId> ) : boolean {
    
    return !shallowEqual(left, right)
  }

} 