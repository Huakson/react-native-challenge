export const initialState = {
    name: '',
    cart: []
};

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setName':
            return {
                ...state,
                name: action.payload.name
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
        default:
            return state;
    }
}

