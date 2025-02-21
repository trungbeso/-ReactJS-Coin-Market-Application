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

import {Avatar, AvatarImage} from "@/components/ui/avatar";

const Activity = () => {
    return (
        <dic className="p-5 lg:p-20">

            <div className="px-20 justify-center items-center w-auto">
                <h1 className="font-bold text-3xl pb-5">Activity</h1>
                <Table className="border">
                    <TableHeader>
                        <TableRow className="bg-gray-800 rounded-tl-lg rounded-tr-lg">
                            <TableHead className="py-5">Date & Time</TableHead>
                            <TableHead>Trading Pair</TableHead>
                            <TableHead>Buying Price</TableHead>
                            <TableHead>Selling Price</TableHead>
                            <TableHead>Order Type</TableHead>
                            <TableHead className="">Profile Loss</TableHead>
                            <TableHead className="text-right">VALUE</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (<TableRow key={index}>
                            <TableCell>SHIBA</TableCell>
                            <TableCell className="font-medium flex items-center gap-2 w-30">
                                <Avatar className="-z-50">
                                    <AvatarImage src="https://s2.coinmarketcap.com/static/img/coins/200x200/5994.png"
                                    />
                                </Avatar>
                                <span>Coin name</span>
                            </TableCell>
                            <TableCell>123123123</TableCell>
                            <TableCell>124.123.12.31.24.41.24.11</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="">$250.00</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>

                        </TableRow>))}

                    </TableBody>
                </Table>
            </div>

        </dic>
    )
}

export default Activity