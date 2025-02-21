import Navbar from "./page/Navbar/Navbar"


import Portfolio from "@/page/Portfolio/Portfolio.js";
import Activity from "@/page/Activity/Activity.js";
import Wallet from "@/page/Wallet/Wallet.js";
import Withdrawal from "@/page/Withdrawal/Withdrawal.js";
import PaymentDetails from "@/page/Payment Details/PaymentDetails.js";
import StockDetails from "@/page/Stock Details/Stock Details.js";
import WatchList from "@/page/Watch List/WatchList.js";
import Profile from "@/page/Profile/Profile.js";
import SearchCoin from "@/page/Search/SearchCoin.js";
import NotFound from "@/page/Notfound/NotFound.js";
import Home from "@/page/Home/Home.js";
import {Routes, Route} from "react-router-dom";
import {ThemeProvider} from "@/components/theme-provider"
import React from "react";
import Auth from "@/page/Auth/Auth.js";

function App() {

    return (
        <>
            <Auth/>
            {false && <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/activity" element={<Activity/>}/>
                    <Route path="/wallet" element={<Wallet/>}/>
                    <Route path="/withdrawal" element={<Withdrawal/>}/>
                    <Route path="/payment-details" element={<PaymentDetails/>}/>
                    <Route path="/stock-details" element={<StockDetails/>}/>
                    <Route path="/watchList" element={<WatchList/>}/>
                    <Route path="/market/:id" element={<StockDetails/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/search" element={<SearchCoin/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>}
        </>
    )
}

export default App
