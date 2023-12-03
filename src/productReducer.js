import { ADD_TO_CART, REMOVE_FROM_CART } from './productActions';

const initialState = {
  addedProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addedProducts: [...state.addedProducts, action.payload],
      };

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
