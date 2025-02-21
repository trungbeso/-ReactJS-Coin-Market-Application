import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {DotIcon} from "lucide-react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";


const TreadingForm = () => {
    const [orderType, setOrderType] = useState("BUY");

    const handleChange = () => {

    };
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
                        <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">0.123</p>
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
                        <p className="text-xl font-bold">$5555</p>
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
                    <p>{orderType=="BUY" ? "Available Cash" : "Available Quantity"}</p>
                    <p>{orderType=="BUY" ? "$555.43" : "0.234621"}</p>

                </div>
            </div>

            <div className="space-y-5 flex flex-col items-center">
                <Button className={`w-full cursor-pointer font-bold text-lg ${orderType == "BUY" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}>
                    {orderType}
                </Button>
                <Button
                        variant="link"
                        onClick={() => {setOrderType(orderType == "BUY" ? "SELL" : "BUY")}}
                        className="w-2/5 text-md border border-gray-500 border-dotted cursor-pointer ">
                    {orderType == "BUY" ? "Or Sell" : "Or Buy"}
                </Button>
            </div>
        </div>
    );
};

export default TreadingForm;