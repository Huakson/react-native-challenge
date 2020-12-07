export const initialState = {
    email: '',
    name: '',
    cart: [],
    checkOut: {
        freight: 0,
        subTotal: 0,
        total: 0
    }
};

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setName':
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            };
        case 'addProduct':
            return {
                ...state,
                cart: [...state.cart, action.payload.produto]

            }   
        case 'removeProduct':
            return {
                ...state,
                cart: state.cart.filter(item => item != action.payload.produto)
            }  
        case 'updateQtd':
            return{
                ...state,
                cart: state.cart.map((item, index) => {
                    if(item.id === action.payload.produto.id){
                        item.qtd = action.payload.qtd
                    }
                    return item
                })
            }
        case 'setCheckOut':
            return{
                ...state,
                checkOut: {
                    freight: action.payload.checkout.freight,
                    subTotal: action.payload.checkout.subTotal,
                    Total: action.payload.checkout.total
                }
            } 
        case 'clean':
            return{
                ...state,
                cart: [],
                checkout: {}
            }                 
        default:
            return state;
    }
}

