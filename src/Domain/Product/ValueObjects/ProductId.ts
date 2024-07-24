
import { v4 as UUID } from 'uuid';
import { ValueObject } from "src/Framework.Core/Domain/ValueObject";

interface IProductIdProps {
    value: UUID,
}

export  class  ProductId extends ValueObject<IProductIdProps>{

   private constructor(value:IProductIdProps) {
        super(value);
    }

      get Value(): UUID {
        return this.value.value;
      }

      public static Create(value: UUID) : ProductId {
        return new ProductId({value:value});
      }

      public static CreateUnique() : ProductId {
          return new ProductId({value:UUID()});
      }

}