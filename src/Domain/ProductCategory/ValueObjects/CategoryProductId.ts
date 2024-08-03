
import { ValueObject } from '@Framework.Core/Domain/ValueObject';
import { v4 as uuidv4 } from 'uuid';
 

interface ICategoryProductIdProps {
    value: string ,
}

export  class  CategoryProductId extends ValueObject<ICategoryProductIdProps>{

   private constructor(value:ICategoryProductIdProps) {
        super(value);
    }

      get Value(): string {
        return this.value.value;
      }

      public static Create(value: string) : CategoryProductId {
        return new CategoryProductId({value:value});
      }

      public static CreateUnique() : CategoryProductId {
          return new CategoryProductId({value:uuidv4()});
      }

}