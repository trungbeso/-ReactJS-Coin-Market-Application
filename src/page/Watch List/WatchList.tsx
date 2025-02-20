import {Avatar, AvatarImage} from "@/components/ui/avatar";
import React from "react";
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

import {BookmarkFilledIcon} from "@radix-ui/react-icons";

const WatchList = () => {
    function handleRemoveToWatchList(value) {
        console.log(value)
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
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item,index) => (<TableRow key={index}>
                            <TableCell className="font-medium flex items-center gap-2 w-30">
                                <Avatar className="-z-50">
                                    <AvatarImage src="https://s2.coinmarketcap.com/static/img/coins/200x200/5994.png"
                                    />
                                </Avatar>
                                <span>Coin name</span>
                            </TableCell>

                            <TableCell>SHIBA</TableCell>
                            <TableCell>123123123</TableCell>
                            <TableCell>124.123.12.31.24.41.24.11</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="">$250.00</TableCell>
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