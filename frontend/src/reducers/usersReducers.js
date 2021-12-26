import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,USER_LOGIN_FAIL, USER_LOGOUT } from "../constants/userConstants";
export const userLoginRedcuer = (state = {  }, action) => {
  
    switch (action.type) {
      // case 'PRODUCT_LIST_REQUEST': we can put in constant and import it as
      case USER_LOGIN_REQUEST: // dispatch from productActions
        return { loading: true };
  
      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
  
      case USER_LOGIN_FAIL:
        return { loading: true, error: action.payload };
        case USER_LOGOUT:
        return { };  
      default:
        return state;
    }
  };