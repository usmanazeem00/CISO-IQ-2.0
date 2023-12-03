import { ADD_TO_CART, REMOVE_FROM_CART } from './productActions';

const initialState = {
  addedProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = state.addedProducts.find(product => product.id === action.payload.id);
      if (existingProduct) {
        const updatedProducts = state.addedProducts.map(product =>
          product.id === action.payload.id ? { ...product, quantity: product.quantity + action.payload.quantity } : product
        );
        return {
          ...state,
          addedProducts: updatedProducts,
        };
      } else {
        return {
          ...state,
          addedProducts: [...state.addedProducts, action.payload],
        };
  
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        addedProducts: state.addedProducts.filter(product => product.id !== action.payload),
      };

    default:
      return state;
  }
};

export default productReducer;
