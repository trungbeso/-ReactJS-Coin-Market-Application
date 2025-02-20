import React from 'react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Avatar, AvatarImage} from "@radix-ui/react-avatar";


const AssetTable = () => {
    return (
        <>
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Coin</TableHead>
                        <TableHead>SYMBOL</TableHead>
                        <TableHead>VOLUME</TableHead>
                        <TableHead>MARKET CAP</TableHead>
                        <TableHead>24h</TableHead>
                        <TableHead className="text-right">PRICE</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[1,1,1,1,1,1,1,1,1].map((index) => (<TableRow key={index}>
                        <TableCell className="font-medium flex items-center gap-2">
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
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>))}

                </TableBody>
            </Table>

        </>
    )
}

export default AssetTable