import {
    ADD_COIN_TO_WATCHLIST_FAILURE,
    ADD_COIN_TO_WATCHLIST_REQUEST, ADD_COIN_TO_WATCHLIST_SUCCESS,
    GET_USER_WATCHLIST_FAILURE,
    GET_USER_WATCHLIST_REQUEST,
    GET_USER_WATCHLIST_SUCCESS
} from "@/State/WatchList/ActionType.js";
import api from "@/config/api.js";

export const getUserWatchList = (jwt) => async (dispatch) => {

    dispatch({type: GET_USER_WATCHLIST_REQUEST});
    try {
        const response = await api.get('watchlist/user', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({type: GET_USER_WATCHLIST_SUCCESS, payload: response.data});
        console.log("user watchlist ", response.data);
    } catch (error) {
        console.log("error -----", error.response.data);
        dispatch({type: GET_USER_WATCHLIST_FAILURE, error: error.message});
    }
}

export const addItemToWatchlist = ({coinId, jwt}) => async (dispatch) => {
    dispatch({type: ADD_COIN_TO_WATCHLIST_REQUEST});
    try {
        const response = await api.patch(`watchlist/add/coin/${coinId}`,{}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({type: ADD_COIN_TO_WATCHLIST_SUCCESS, payload: response.data});
    } catch (error) {
        console.log("error -----", error.response.data);
        dispatch({type: ADD_COIN_TO_WATCHLIST_FAILURE, error: error.message});
    }
}