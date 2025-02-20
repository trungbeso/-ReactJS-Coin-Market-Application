import {Button} from "@/components/ui/button"
import React from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import {Avatar, AvatarImage} from "@radix-ui/react-avatar";
import {DotIcon, MessageCircle} from "lucide-react";

const Home = () => {
    const [category, setCategory] = React.useState("all");

    const handleCategory = (value) => {
        setCategory(value);
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
                className="absolute bottom-5 right-5 -translate-y-3 z-40 flex flex-col justify-end items-end gap-2">
                <div className="relative w-[10rem] group">
                    <Button className="w-full h-[3rem] cursor-pointer gap-2 items-center bg-white text-black">
                        <MessageCircle className="fill-[#1e293b]  -rotate-90 stroke-none group-hover:fill-[#1a1a1a]"/>
                        <span className="text-2xl">Chat Bot</span>
                    </Button>
                </div>

            </section>

        </div>
    )
}

export default Home