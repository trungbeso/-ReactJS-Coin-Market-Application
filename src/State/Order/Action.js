import {
    GET_ALL_ORDERS_FAILURE,
    GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS,
    GET_ORDER_FAILURE,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    PAY_ORDER_REQUEST
} from "@/State/Order/ActionType.js";
import api from "@/config/api.js";

export const payOrder = ({jwt, orderData, amount}) => async(dispatch) => {
    dispatch({type: PAY_ORDER_REQUEST});
    try {
        const response = await api.post('orders/pay', orderData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({type: GET_ORDER_SUCCESS, payload: response.data, amount});
        console.log("order success ", response.data);
    } catch (error) {
        console.log('error: ' + error)
        dispatch({type: GET_ORDER_FAILURE, error: error.message});
    }
}

export const getOrderById = (jwt, orderId) => async(dispatch) => {
    dispatch ({ type: GET_ORDER_REQUEST})
    try {
        const response = await api.get(`orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("order success ", response.data);
        dispatch({type: GET_ORDER_SUCCESS, payload: response.data});
    } catch (error) {
        console.log('error: ' + error)
        dispatch({type: GET_ORDER_FAILURE, error: error.message});
    }
}

//activity
export const getAllOrdersForUser = ({jwt, orderType, assetSymbol}) => async(dispatch) => {
    dispatch ({type: GET_ALL_ORDERS_REQUEST});
    try {
        const response = await api.get('/orders', {
            headers: {
                Authorization: `Bearer ${jwt}`
            },
            params: {
                order_type: orderType,
                asset_symbol: assetSymbol
            }
        })
        dispatch ({type: GET_ALL_ORDERS_SUCCESS, payload: response.data});
    } catch (error) {
        console.log('error: ' + error)
        dispatch ({type: GET_ALL_ORDERS_FAILURE, error: error.message});
    }
}