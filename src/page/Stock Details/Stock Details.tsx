import React, {useEffect} from 'react';
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {BookmarkIcon, DotIcon} from "lucide-react";
import {Button} from "@/components/ui/button"
import {BookmarkFilledIcon} from "@radix-ui/react-icons";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import TradingForm from "./TradingForm";
import StockChart from "../Home/StockChart";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import { fetchCoinDetails } from "@/State/Coin/Action"

const StockDetails = () => {

    const {coin} = useSelector(store => store);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchCoinDetails({coinId: id, jwt: localStorage.getItem("jwt")}));
    },[id])

    return (
        <div className="py-5 mt-5">
            <div className="flex justify-between">
                <div className="flex gap-5 items-center pl-3">
                    <div>
                        <Avatar>
                            <AvatarImage
                                src={coin.coinDetails?.image.large}
                               />
                        </Avatar>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
                            <DotIcon className="text-gray-400"/>
                            <p className="text-gray-400">{coin.coinDetails?.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
                            <p className="text-red-400">
                                <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                                <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button className="bg-white text-black cursor-pointer hover:bg-slate-200">
                        {true ? <BookmarkFilledIcon className="h-6 w-6"/>
                            : <BookmarkIcon className="h-6 w-6"/>}
                    </Button>

                    <Dialog>
                        <DialogTrigger>
                            <Button className="text-lg bg-white text-black cursor-pointer hover:bg-slate-200">Trade</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>How Much Do you want to spend?</DialogTitle>
                            </DialogHeader>
                            <TradingForm/>

                        </DialogContent>
                    </Dialog>


                </div>
            </div>
            <div className="mt-5">
                <StockChart coinId={id}/>
            </div>


        </div>
    );
};

export default StockDetails;