import {
    ADD_PAYMENT_DETAILS_FAILURE,
    ADD_PAYMENT_DETAILS_REQUEST, ADD_PAYMENT_DETAILS_SUCCESS,
    GET_WITHDRAWAL_HISTORY_FAILURE,
    GET_WITHDRAWAL_HISTORY_REQUEST,
    GET_WITHDRAWAL_HISTORY_SUCCESS, GET_WITHDRAWAL_REQUEST_FAILURE,
    GET_WITHDRAWAL_REQUEST_REQUEST,
    GET_WITHDRAWAL_REQUEST_SUCCESS,
    WITHDRAWAL_FAILURE,
    WITHDRAWAL_PROCEED_FAILURE,
    WITHDRAWAL_PROCEED_REQUEST,
    WITHDRAWAL_PROCEED_SUCCESS,
    WITHDRAWAL_REQUEST,
    WITHDRAWAL_SUCCESS
} from "@/State/Withdrawal/ActionType.js";
import api from "@/config/api.js";

export const withdrawalRequest = ({amount, jwt}) => async (dispatch) => {
    dispatch({type: WITHDRAWAL_REQUEST});
    try {
        const response = await api.post(`/withdrawal/${amount}`, null, {
            headers: { Authorization: `Bearer ${jwt}` }
        });
        console.log('data', response.data);
        dispatch({type: WITHDRAWAL_SUCCESS, payload: response});
    } catch (error) {
        dispatch({type: WITHDRAWAL_FAILURE, payload: error.message})
    }
}

export const proceedWithdrawal = ({id, jwt, accept}) => async (dispatch) => {
    dispatch({type: WITHDRAWAL_PROCEED_REQUEST});
    try {
        const response = await api.patch(`withdrawal/${id}/proceed/${accept}`, null, {
            headers: { Authorization: `Bearer ${jwt}` }
        })
        dispatch({type: WITHDRAWAL_PROCEED_SUCCESS, payload: response});
    } catch (error) {
        console.log('error: ', error)
        dispatch({type: WITHDRAWAL_PROCEED_FAILURE, payload: error.message})
    }
}

export const getWithdrawalHistory = jwt => async (dispatch) => {
    dispatch ({type: GET_WITHDRAWAL_HISTORY_REQUEST});
    try {
        const response = await api.get(`withdrawal`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        console.log('get withdrawalHistory', response.data);
        dispatch({type: GET_WITHDRAWAL_HISTORY_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: GET_WITHDRAWAL_HISTORY_FAILURE, payload: error.message})
        console.log('error: ', error)
    }
}

//admin method
export const getAllWithdrawalRequest = jwt => async (dispatch) => {
    dispatch ({type: GET_WITHDRAWAL_REQUEST_REQUEST});
    try {
        const response = await api.get(`admin`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log('get all withdrawal', response.data);
        dispatch({type: GET_WITHDRAWAL_REQUEST_SUCCESS, payload: response.data});
    } catch (error) {
        console.log('error: ', error)
        dispatch({type: GET_WITHDRAWAL_REQUEST_FAILURE, payload: error.message})
    }
}

export const addPaymentDetails = ({paymentDetails, jwt}) => async (dispatch) => {
    dispatch({type: ADD_PAYMENT_DETAILS_REQUEST});
    try {
        const response = await api.post(`payment-details`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log('add payment details', response.data);
        dispatch({type: ADD_PAYMENT_DETAILS_SUCCESS, payload: response.data});
    } catch (error) {
        console.log('error: ', error)
        dispatch({type: ADD_PAYMENT_DETAILS_FAILURE, payload: error.message})
    }
}