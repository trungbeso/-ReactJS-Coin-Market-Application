import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import authReducer from "@/State/Auth/Reducer.js";
import coinReducer from "@/State/Coin/Reducer.js";
import walletReducer from "@/State/Wallet/Reducer.js";
import withdrawalReducer from "@/State/Withdrawal/Reducer.js";
import orderReducer from "@/State/Order/Reducer.js";
import assetReducer from "@/State/Asset/Reducer.js";

const rootReducer = combineReducers({
    auth: authReducer,
    coin: coinReducer,
    wallet: walletReducer,
    withdrawal: withdrawalReducer,
    order: orderReducer,
    asset: assetReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));