import {Avatar, AvatarImage} from "@/components/ui/avatar";
import React, {useEffect} from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Button} from "@/components/ui/button"
import { getUserWatchList } from "@/State/Watchlist/Action"
import {BookmarkFilledIcon} from "@radix-ui/react-icons";
import {useDispatch, useSelector} from "react-redux";
import { addItemToWatchlist } from "@/State/Watchlist/Action"

const WatchList = () => {
    const dispatch = useDispatch();
    const {watchlist} = useSelector(store=>store)

    useEffect(() => {
        dispatch(getUserWatchList(localStorage.getItem('jwt')))
    }, []);

    const handleRemoveToWatchList= (value) => {
        dispatch(addItemToWatchlist({coinId: value, jwt: localStorage.getItem("jwt")}))
    }

    return (
        <dic className="p-5 lg:p-20">

            <div className="px-20 justify-center items-center w-auto">
                <h1 className="font-bold text-3xl pb-5">Watch List</h1>
                <Table className="border">
                    <TableHeader>
                        <TableRow className="bg-gray-800 rounded-tl-lg rounded-tr-lg">
                            <TableHead className="py-5">Coin</TableHead>
                            <TableHead>SYMBOL</TableHead>
                            <TableHead>VOLUME</TableHead>
                            <TableHead>MARKET CAP</TableHead>
                            <TableHead>24h</TableHead>
                            <TableHead className="">PRICE</TableHead>
                            <TableHead className="text-right text-red-600">Remove</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {watchlist.items.map((item,index) => (<TableRow key={index}>
                            <TableCell className="font-medium flex items-center gap-2 w-30">
                                <Avatar className="-z-50">
                                    <AvatarImage src={item.image}
                                    />
                                </Avatar>
                                <span>{item.name}</span>
                            </TableCell>

                            <TableCell>{item.symbol.toUpperCase()}</TableCell>
                            <TableCell>{item.total_volume}</TableCell>
                            <TableCell>{item.market_cap}</TableCell>
                            <TableCell>{item.price_change_percentage_24h}</TableCell>
                            <TableCell className="">${item.current_price}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost"
                                    onClick={() => handleRemoveToWatchList(item.id)} size="icon" className="h-10 w-10">

                                    <BookmarkFilledIcon className="w-10 h-10" />
                                </Button>
                            </TableCell>
                        </TableRow>))}

                    </TableBody>
                </Table>
            </div>

        </dic>
    );
};

export default WatchList;