import {Button} from "@/components/ui/button"
import React from "react";
import AssetTable from "../AssetTable";

const Home = () => {
    const [category, setCategory] = React.useState("all");

    const handleCategory = (value) => {
        setCategory(value);
    }

    return (
        <div className="relative">
            <div className="lg:flex ">
                <div className="lg:w-1/2 lg:border-b">
                    <div className="p-3 flex items-center gap-4  *:hover:bg-white *:hover:text-black *:selection:bg-white">
                       <Button onClick={() => handleCategory("all")} className="rounded-full" variant={category=="all" ? "default" : "outline"}>All</Button>
                       <Button onClick={() => handleCategory("top50")} className="rounded-full" variant={category=="top50" ? "default" : "outline"}>Top 50</Button>
                       <Button onClick={() => handleCategory("topGainers")} className="rounded-full" variant={category=="topGainers" ? "default" : "outline"}>Top Gainers</Button>
                       <Button onClick={() => handleCategory("topLosers")} className="rounded-full" variant={category=="topLosers" ? "default" : "outline"}>Top Losers</Button>
                    </div>
                    <AssetTable/>
                </div>
            </div>

    </div>
    )
}

export default Home