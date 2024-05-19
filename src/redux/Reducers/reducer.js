const INIT_STATE = {
   
    carts:   JSON.parse(localStorage.getItem('cart')) ??[]
};


export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

        const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        if(IteamIndex >= 0){
            state.carts[IteamIndex].quantity +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload,quantity:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }

// 
//  incrementQuantity: (state, action) => {
//     state = state.map(item => {
//         if (item.id === action.payload) {
//             item.quantity++;
//         }
//         return item;
//     });
// }
//  decrementQuantity: (state, action) => {
//     state = state.map(item => {
//         if (item.quantity !== 1) {
//             if (item.id === action.payload) {
//                 item.quantity--;
//             }
//         }
//         return item;

//     })
// }


// 

        case "RMV_CART":
            const data = state.carts.filter((el)=>el.id !== action.payload); 
            // console.log(data);

            return {
                ...state,
                carts:data
            }

        case "RMV_ONE":
            const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
   
            if(state.carts[IteamIndex_dec].quantity >= 1){
                const dltiteams = state.carts[IteamIndex_dec].quantity -= 1
                console.log([...state.carts,dltiteams]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[IteamIndex_dec].quantity === 1 ){
                const data = state.carts.filter((el)=>el.id !== action.payload);

                return {
                    ...state,
                    carts:data
                }
            }

        default:
            return state
    }
}

