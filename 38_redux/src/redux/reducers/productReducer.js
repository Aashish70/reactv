
const initialState = {
    products: [],
    count: 1
}


export const productReducer = (state = initialState, action) => {
    
    if(action.type === 'ADD_TO_PRODUCT'){
        return {
            ...state,
            products: [...state.products, action.payload]
        }
    } else if(action.type === 'INCREMENT'){
        console.log("increament", state.count)
        return {
            ...state,
            count: state.count + 1
        }
    }else{
        return state
    }
}