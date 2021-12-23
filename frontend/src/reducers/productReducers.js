// Import constants from constants folder

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants.js';

export const productListReducer = (state = { products: [] }, action) => {
  // action has 3 type request, success, failure

  // eslint-disable-next-line default-case
  switch (action.type) {
    // case 'PRODUCT_LIST_REQUEST': we can put in constant and import it as
    case PRODUCT_LIST_REQUEST: // dispatch from productActions
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};

// in order to use this reducer lets import it to store
