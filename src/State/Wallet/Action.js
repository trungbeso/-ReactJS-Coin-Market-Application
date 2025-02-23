import api from "@/config/api.js";
import {
    DEPOSIT_MONEY_FAILURE,
    DEPOSIT_MONEY_REQUEST,
    DEPOSIT_MONEY_SUCCESS,
    GET_USER_WALLET_FAILURE,
    GET_USER_WALLET_REQUEST,
    GET_USER_WALLET_SUCCESS,
    GET_WALLET_TRANSACTION_REQUEST,
    GET_WALLET_TRANSACTION_SUCCESS,
    TRANSFER_MONEY_FAILURE,
    TRANSFER_MONEY_REQUEST,
    TRANSFER_MONEY_SUCCESS
} from "@/State/Wallet/ActionType.js";

export const getUserWallet = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_WALLET_REQUEST });
    try {
        const response = await api.get('/wallets', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: GET_USER_WALLET_SUCCESS, payload: response.data });
        console.log("user wallets", response.data);
    }catch(error) {
        console.log(error);
        dispatch({type: GET_USER_WALLET_FAILURE, payload: error.message})
    }
}

export const getWalletTransaction =({jwt}) => async (dispatch) => {
    dispatch({type: GET_WALLET_TRANSACTION_REQUEST});
    try {
        const response = await api.get('wallets/transaction', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({type: GET_WALLET_TRANSACTION_SUCCESS, payload: response.data});
    } catch (error) {
        console.log("error: " + error)
        dispatch({type: GET_USER_WALLET_FAILURE, payload: error.message})
    }
}

export const depositMoney = ({jwt, orderId, paymentId, navigate}) => async (dispatch) => {
    dispatch ({type: DEPOSIT_MONEY_REQUEST});
    try {
        const response = await api.put(`wallets/wallet/deposit`, null,{
            params: {
                order_id: orderId,
                payment_id: paymentId,
            },
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        navigate("/wallets")
        console.log(response.data)
    } catch (error) {
        console.log("error: ", error)
        dispatch({type: DEPOSIT_MONEY_FAILURE, payload: error.message})
    }
}

export const paymentHandler = ({jwt, amount, paymentMethod}) => async (dispatch) => {
    dispatch({type: DEPOSIT_MONEY_REQUEST})
    try {
        const response = await api.post(`payment/${paymentMethod}/amount/${amount}`,null, {
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json'
            }
        });
        // redirect user to payment page
        window.location.href = response.data.payment_url;
       // dispatch ({type: DEPOSIT_MONEY_SUCCESS, payload: response.data});
    } catch (error) {
        console.log("error: ", error)
        dispatch({type: DEPOSIT_MONEY_FAILURE, payload: error.message})
    }
}

export const transferMoney = ({jwt, walletId, reqData}) => async (dispatch) => {
    dispatch({type: TRANSFER_MONEY_REQUEST});
    try {
        const response = await api.put(`wallets/${walletId}/transfer`, reqData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch ({type: TRANSFER_MONEY_SUCCESS, payload: response.data});
        console.log("transfer money sent", response.data)
    } catch (error) {
        console.log("error: ", error)
        dispatch ({type: TRANSFER_MONEY_FAILURE, payload: error.message})
    }
}

