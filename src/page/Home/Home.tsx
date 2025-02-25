import axios from 'axios';
import React, { useEffect } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DotIcon, MessageCircle } from "lucide-react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { getCoinList, getTop50CoinList } from "@/State/Coin/Action.js";
import image  from "../../assets/gemini.png"

const Home = () => {
    const [category, setCategory] = React.useState("all");
    const [inputValue, setInputValue] = React.useState("");
    const [isBotReleased, setIsBotReleased] = React.useState(false);
    const [chatMessages, setChatMessages] = React.useState([]);
    const { coin } = useSelector(store => store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoinList(1));
    }, []);

    useEffect(() => {
        dispatch(getTop50CoinList());
    }, [category]);

    const handleCategory = (value) => {
        setCategory(value);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = async (event) => {
        if (event.key === "Enter") {
            const newMessage = { text: inputValue, isUser: true };
            setChatMessages([...chatMessages, newMessage]);

            try {
                const response = await handleChat(inputValue);
                setChatMessages([...chatMessages, newMessage, { text: response, isUser: false }]);
            } catch (error) {
                console.error("Error handling chat:", error);
            }

            setInputValue("");
        }
    };

    const handleBotRelease = () => {
        setIsBotReleased(!isBotReleased);
    };

    const handleChat = async (prompt) => {
        const coinKeywords = ["price", "market cap", "crypto", "coin", "the current", "market cap rank", "value"];
        const isCoinRelated = coinKeywords.some(keyword => prompt.toLowerCase().includes(keyword));

        const url = isCoinRelated ? "http://localhost:5454/ai/chat" : "http://localhost:5454/ai/chat/simple";
        const response = await axios.post(url, { prompt });

        return response.data.message || response.data;
    };

    return (
        <div className="relative">
            <div className="lg:flex ">
                <div className="lg:w-1/2">
                    <div className="p-3 flex items-center gap-4 *:cursor-pointer *:border *:hover:bg-white *:hover:text-black *:rounded-lg *:hover:font-bold text-center">
                        <Button onClick={() => handleCategory("all")}  className={category == "all" ? "bg-white text-black pointer-events-none" : ""}>All</Button>
                        <Button onClick={() => handleCategory("top50")} className={category == "top50" ? "bg-white text-black pointer-events-none" : ""}>Top 50</Button>
                        <Button onClick={() => handleCategory("topGainers")} className={category == "topGainers" ? "bg-white text-black pointer-events-none" : ""}>Top Gainers</Button>
                        <Button onClick={() => handleCategory("topLosers")} className={category == "topLosers" ? "bg-white text-black pointer-events-none" : ""}>Top Losers</Button>
                    </div>
                    <AssetTable coin={category == "all" ? coin.coinList : coin.top50} category={category} />
                    <div>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <StockChart coinId={"bitcoin"} />
                    {coin.coinList.length > 0 && (
                        <div className="flex gap-3 items-center py-7 pl-4" key={coin.coinList[0].id}>
                            <div>
                                <Avatar>
                                    <AvatarImage src={coin.coinList[0].image} width={50} height={50} />
                                </Avatar>
                            </div>
                            <div>
                                <div className="items-center gap-2">
                                    <p>{coin.coinList[0].name}</p>
                                    <p className="text-xl font-bold">${coin.coinList[0].current_price}</p>
                                </div>
                            </div>
                            <DotIcon className="text-gray-400" />
                            <div className="items-end gap-2">
                                <p className="text-gray-400">{coin.coinList[0].symbol.toUpperCase()}</p>
                                <p>
                                    <span>{coin.coinList[0].market_cap}</span>
                                    <span className="text-green-600">({coin.coinList[0].price_change_percentage_24h}%)</span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <section className="fixed right-8 bottom-8 z-40 flex flex-col justify-end items-end gap-2">
                {isBotReleased && (
                    <div className="rounded-md w-[25rem] md:w[25rem] lg:w[25rem] h-[70vh] bg-slate-900">
                        <div className="flex justify-between items-center font-semibold border-b border-gray-700 px-5 h-[12%] bg-gray-800 rounded-tl-lg rounded-tr-lg">
                            <p>Gemini mini-1.5-flash</p>
                            <Button onClick={handleBotRelease} variant="ghost" size="icon" className="cursor-pointer hover:border">
                                <Cross1Icon />
                            </Button>
                        </div>
                        <div className="h-[75%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
                            {chatMessages.map((message, index) => (
                                <div key={index} className={`${message.isUser ? "self-end" : "self-start"} pb-5 w-auto`}>
                                    <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                        <p>{message.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-[12%] border-t border-gray-500">
                            <Input
                                className="w-full h-full border-none px-3 py-2 rounded-md bg-slate-800 placeholder:text-gray-400"
                                placeholder="Enter your prompt"
                                onChange={handleChange}
                                value={inputValue}
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                    </div>
                )}
                <div className=" w-[10rem] ">
                    <button onClick={handleBotRelease} className="w-full h-[3rem] cursor-pointer gap-2 items-center relative">
                        <img src={image} alt="gemini" className="rounded-lg w-40 h-15 object-cover shadow-lg shadow-slate-700 animate-bounce "/>
                        <span className="absolute -top-3 left-0 rounded-lg w-40 h-15 bg-gray-700 opacity-20 animate-ping"></span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;