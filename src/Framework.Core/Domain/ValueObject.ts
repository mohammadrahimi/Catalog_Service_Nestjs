import { shallowEqual } from "shallow-equal-object";

interface ValueObjectProps {
  [index: string]: any;
}

 
export abstract class ValueObject<T extends ValueObjectProps> {
  public readonly value: T;

  constructor (value: T) {
    this.value = Object.freeze(value);
  }

  public equals (vo?: ValueObject<T>) : boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.value === undefined) {
      return false;
    }
    return shallowEqual(this.value, vo.value)
  }

  toString(): string {
    return this.value.toString();
  }
  
}