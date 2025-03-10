import axios from "axios";
import {
    FETCH_COIN_BY_ID_FAILURE,
    FETCH_COIN_BY_ID_REQUEST,
    FETCH_COIN_BY_ID_SUCCESS,
    FETCH_COIN_DETAILS_FAILURE,
    FETCH_COIN_DETAILS_REQUEST,
    FETCH_COIN_DETAILS_SUCCESS,
    FETCH_COIN_LIST_FAILURE,
    FETCH_COIN_LIST_REQUEST,
    FETCH_COIN_LIST_SUCCESS,
    FETCH_MARKET_CHART_FAILURE,
    FETCH_MARKET_CHART_REQUEST,
    FETCH_MARKET_CHART_SUCCESS,
    FETCH_TOP_50_COINS_FAILURE,
    FETCH_TOP_50_COINS_REQUEST,
    FETCH_TOP_50_COINS_SUCCESS, SEARCH_COIN_FAILURE, SEARCH_COIN_REQUEST, SEARCH_COIN_SUCCESS
} from "@/State/Coin/ActionType.js";
import api, {API_BASE_URL} from "@/config/api.js";

export const getCoinList = (page) => async (dispatch) => {
    dispatch({type: FETCH_COIN_LIST_REQUEST})
    try {

        const {data} = await axios.get(`${API_BASE_URL}/coins?page=${page}`);
        // const data = await axios.get(`${API_BASE_URL}/coins`);
        console.log("coin list ", data)

        dispatch({type: FETCH_COIN_LIST_SUCCESS, payload: data})

    } catch (error) {
        console.log('error: ' + error)
        dispatch({type: FETCH_COIN_LIST_FAILURE, error: error.message})
    }
}

export const getTop50CoinList = () => async (dispatch) => {
    dispatch({ type: FETCH_TOP_50_COINS_REQUEST})

    try {
        const response = await axios.get(`${API_BASE_URL}/coins/top50`);
        dispatch({ type: FETCH_TOP_50_COINS_SUCCESS, payload: response.data })
        console.log("top 50", response.data)
    } catch (error) {
        console.log('error: ' + error)
        dispatch({type: FETCH_TOP_50_COINS_FAILURE, error: error.message})
    }
};

export const fetMarketChart = ({coinId, days, jwt}) => async (dispatch) => {
    dispatch({ type: FETCH_MARKET_CHART_REQUEST})
    try {
        const response = await api.get(`${API_BASE_URL}/coins/${coinId}/chart?days=${days}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch ({ type: FETCH_MARKET_CHART_SUCCESS, payload: response.data });
        console.log("coin chart ", response.data)
    } catch (error) {
        console.log('error: ' + error)
        dispatch ({type: FETCH_MARKET_CHART_FAILURE, error: error.message})
    }
};

export const fetchCoinById = (coinId) => async (dispatch) => {
    dispatch ({type: FETCH_COIN_BY_ID_REQUEST})
    try {
        const response = await axios.get(`${API_BASE_URL}/coins/${coinId}`);
        dispatch({type: FETCH_COIN_BY_ID_SUCCESS, payload: response.data})
        console.log("coin by id",response.data)
    } catch (error) {
        console.log('error: ' + error)
        dispatch({type: FETCH_COIN_BY_ID_FAILURE, error: error.message})
    }
};

export const fetchCoinDetails = ({coinId, jwt}) => async (dispatch) => {
    dispatch ({type: FETCH_COIN_DETAILS_REQUEST})
    try {
        const response = await api.get(`${API_BASE_URL}/coins/details/${coinId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({type: FETCH_COIN_DETAILS_SUCCESS, payload: response.data})
        console.log("coin details ", response.data)
    } catch (error) {
        console.log("error: " + error)
        dispatch({type: FETCH_COIN_DETAILS_FAILURE, error: error.message})
    }
};

export const searchCoin = (keyword) => async (dispatch) => {
    dispatch ({type: SEARCH_COIN_REQUEST})
    try {
        const response = await api.get(`${API_BASE_URL}/coins/search`);
        dispatch({type: SEARCH_COIN_SUCCESS, payload: response.data})
        console.log("search coin ",response.data)
    } catch (error) {
        console.log('error: ' + error)
        dispatch({type: SEARCH_COIN_FAILURE, error: error.message})
    }
};