import {
    GET_ALL_ORDERS_FAILURE,
    GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS, GET_ORDER_FAILURE,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS, PAY_ORDER_FAILURE,
    PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS
} from "@/State/Order/ActionType.js";

const initialState = {
    order: null,
    orders: [],
    loading: false,
    error: null,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAY_ORDER_REQUEST:
        case GET_ORDER_REQUEST:
        case GET_ALL_ORDERS_REQUEST:
            return {
                ...state,
                loading: false,
                error: null,
            };

        case GET_ORDER_SUCCESS:
        case PAY_ORDER_SUCCESS:
            return {
                ...state,
                order: action.payload,
                loading: false,
                error: null,
            }

        case GET_ALL_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
                error: null,
            }

        case PAY_ORDER_FAILURE:
        case GET_ORDER_FAILURE:
        case GET_ALL_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export default orderReducer