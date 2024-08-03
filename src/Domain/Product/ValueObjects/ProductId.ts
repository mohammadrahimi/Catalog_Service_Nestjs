
import { ValueObject } from '@Framework.Core/Domain/ValueObject';
import { v4 as uuidv4 } from 'uuid';
 

interface IProductIdProps {
    value: string ,
}

export  class  ProductId extends ValueObject<IProductIdProps>{

   private constructor(value:IProductIdProps) {
        super(value);
    }

      get Value(): string {
        return this.value.value;
      }

      public static Create(value: string) : ProductId {
        return new ProductId({value:value});
      }

      public static CreateUnique() : ProductId {
          return new ProductId({value:uuidv4()});
      }

}