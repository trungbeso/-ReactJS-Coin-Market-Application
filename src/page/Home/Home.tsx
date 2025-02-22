import {Button} from "@/components/ui/button"
import React from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import { DotIcon, MessageCircle} from "lucide-react";
import {Cross1Icon} from "@radix-ui/react-icons";

import { Input } from "@/components/ui/input"


const Home = () => {
    const [category, setCategory] = React.useState("all");
    const [inputValue, setInputValue] = React.useState("");
    const [isBotReleased, setIsBotReleased] = React.useState(false);


    const handleCategory = (value) => {
        setCategory(value);
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            console.log(inputValue)
        }
        setInputValue("")
    }

    const handleBotRelease = () => {
        setIsBotReleased(!isBotReleased);
    }


    return (
        <div className="relative">
            <div className="lg:flex ">
                <div className="lg:w-1/2 lg:border-b">
                    <div
                        className="p-3 flex items-center gap-4  *:hover:bg-white *:hover:text-black *:selection:bg-white">
                        <Button onClick={() => handleCategory("all")} className="rounded-full"
                                variant={category == "all" ? "default" : "outline"}>All</Button>
                        <Button onClick={() => handleCategory("top50")} className="rounded-full"
                                variant={category == "top50" ? "default" : "outline"}>Top 50</Button>
                        <Button onClick={() => handleCategory("topGainers")} className="rounded-full"
                                variant={category == "topGainers" ? "default" : "outline"}>Top Gainers</Button>
                        <Button onClick={() => handleCategory("topLosers")} className="rounded-full"
                                variant={category == "topLosers" ? "default" : "outline"}>Top Losers</Button>
                    </div>
                    <AssetTable/>
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <StockChart/>
                    <div className="flex gap-3 items-center py-7 pl-4">
                        <div>
                            <Avatar>
                                <AvatarImage
                                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"}
                                    width={50} height={50}/>
                            </Avatar>
                        </div>
                        <div>
                            <div className=" items-center gap-2">
                                <p>DOGE</p>
                                <p className="text-xl font-bold">1622</p>
                            </div>
                        </div>
                        <DotIcon className="text-gray-400"/>
                        <div className=" items-end gap-2">
                            <p className="text-gray-400">Doge Coin</p>
                            <p>
                                <span className="text-red-600">-123124312412413123</span>
                                <span>(-0.2526982%)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section
                className="absolute bottom-0 right-5 z-40 flex flex-col justify-end items-end gap-2">

                {isBotReleased && <div className="rounded-md w-[25rem] md:w[25rem] lg:w[25rem] h-[70vh] bg-slate-900">
                    <div className="flex justify-between items-center border-b border-gray-500 px-6 h-[12%]">
                        <p>Gemini mini 2.0.4</p>
                        <Button onClick={handleBotRelease}
                                variant="ghost" size="icon" className="cursor-pointer hover:border">
                            <Cross1Icon/>
                        </Button>
                    </div>

                    <div className="h-[75%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
                        <div className="self-start w-auto pt-2">
                            <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                <p>Hi [user name]</p>
                                <p>You can ask for crypto related any question</p>
                                <p>Price, market cap extra . . .</p>
                            </div>
                        </div>

                        {
                            [1, 1, 1, 1].map((item, index) => (
                                <div key={index}
                                     className={`${index % 2 == 0 ? "self-start" : "self-end"}  "pb-5 w-auto"`}>
                                    {index % 2 == 0 ? (<div
                                        className="justify-right self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                        <p>prompt...</p>
                                    </div>) : (
                                        <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                            <p>Hi [user name]</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                    </div>

                    <div className="h-[12%] border-t border-gray-500">
                        <Input
                            className="w-full h-full border-none px-3 py-2 rounded-md bg-slate-800 placeholder:text-gray-400"
                            placeholder="Enter your prombt"
                            onChange={handleChange}
                            value={inputValue}
                            onKeyPress={handleKeyPress}/>

                    </div>
                </div>
                }

                <div className="relative w-[10rem] group ">
                    <Button onClick={handleBotRelease}
                        className="w-full h-[3rem] cursor-pointer gap-2 items-center bg-white text-black">
                        <MessageCircle className="fill-[#1e293b] stroke-none group-hover:fill-[#1a1a1a]"/>
                        <span className="text-2xl">Chat Bot</span>
                    </Button>
                </div>

            </section>

        </div>
    )
}

export default Home