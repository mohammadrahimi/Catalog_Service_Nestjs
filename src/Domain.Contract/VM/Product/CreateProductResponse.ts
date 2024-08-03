 
export class CreateProductVMResponse {
    

    state: string;
    message: string;

    constructor(state: string,
        message: string,
    ) {
    this.state = state;
    this.message = message;
    }

}