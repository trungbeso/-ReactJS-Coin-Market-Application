import React, {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {DotIcon} from "lucide-react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {useDispatch, useSelector} from "react-redux";
import {getUserWallet} from "@/State/Wallet/Action"
import {getAssetDetails} from "@/State/Asset/Action"
import {payOrder} from "@/State/Order/Action"


const TradingForm = () => {
    const [orderType, setOrderType] = useState("BUY");
    const dispatch = useDispatch();
    const {coin, wallet, asset} = useSelector(store => store)
    const [amount, setAmount] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleChange = (e) => {
        const amount = e.target.value;
        setAmount(amount);
        const volume = calculateBuyCost(amount, coin.coinDetails.market_data.current_price.usd);
        setQuantity(volume);
    };

    const calculateBuyCost = (amount, price) => {
        let volume = amount / price;
        let decimalPlaces = Math.max(2, price.toString().split(".")[0].length)
        return volume.toFixed(decimalPlaces);
    }

    useEffect(() => {
        dispatch(getUserWallet(localStorage.getItem("jwt")))
        dispatch(getAssetDetails({coinId: coin.coinDetails?.id, jwt: localStorage.getItem("jwt")}))
    }, []);

    const handleBuyCrypto = () => {
        dispatch(payOrder({
            jwt: localStorage.getItem("jwt"),
            amount, orderData: {
                coinId: coin.coinDetails?.id,
                quantity,
                orderType
            }
        }))
    }
    return (
        <div className="space-y-10 p-5">
            <div>
                <div className="flex gap-4 items-center justify-center">
                    <Input
                        className="py-7 focus:outline-none focus:ring-indigo-500"
                        placeholder="Enter your amount here..."
                        onChange={handleChange}
                        type="number"
                        name="amount"
                    />
                    <div>
                        <p className="border text-2xl flex justify-center items-center w-36 h-14
                        rounded-md">{quantity}</p>
                    </div>
                </div>
                {true && <p className="text-red-600 text-center pt-2 pb-4">
                    Insufficient wallet balance to buy
                </p>}
            </div>

            <div className="flex gap-5 items-center">
                <div>
                    <Avatar>
                        <AvatarImage
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"}
                            width={50} height={50}/>
                    </Avatar>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <p>DOGE</p>
                        <DotIcon className="text-gray-400"/>
                        <p className="text-gray-400">Doge</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
                        <p className="text-red-400">
                            <span>-123123123213</span>
                            <span>(-0.12321%)</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <p>Order Type</p>
                <p>Market Order</p>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <p>{orderType == "BUY" ? "Available Cash" : "Available Quantity"}</p>
                    <p>{orderType == "BUY" ? "$" + wallet.userWallet?.balance : asset.assetDetails?.quantity || 0}</p>

                </div>
            </div>

            <div className="space-y-5 flex flex-col items-center">
                <Button
                    onClick={handleBuyCrypto}
                    className={`w-full cursor-pointer font-bold text-lg ${orderType == "BUY" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}>
                    {orderType}
                </Button>
                <Button
                    variant="link"
                    onClick={() => {
                        setOrderType(orderType == "BUY" ? "SELL" : "BUY")
                    }}
                    className="w-2/5 text-md border border-gray-500 border-dotted cursor-pointer ">
                    {orderType == "BUY" ? "Or Sell" : "Or Buy"}
                </Button>
            </div>
        </div>
    );
};

export default TradingForm;