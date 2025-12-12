

export const addToProduct = (details) => {
    return {
        type: 'ADD_TO_PRODUCT',
        payload: details,
    }
}

export const incProduct = () => {
    return {
        type: 'INCREMENT',
    }
}