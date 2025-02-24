import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";


const AssetTable = ({coin, category}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <Table>
                <ScrollArea className={`${category == "all" ? "h-[78vh]" : "h-[78vh]"}`}>
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
                    <TableBody className="p-2 *:hover:bg-slate-900">
                        {coin.map((item, index) => (<TableRow key={item.id}>
                            <TableCell onClick={() => navigate(`/market/${item.id}`)}
                                       className="font-medium flex items-center gap-2 cursor-pointer">
                                <Avatar className="">
                                    <AvatarImage src={item.image}
                                    />
                                </Avatar>
                                <span>{item.name}</span>
                            </TableCell>
                            <TableCell>{item.symbol.toUpperCase()}</TableCell>
                            <TableCell>{item.total_volume}</TableCell>
                            <TableCell>{item.market_cap}</TableCell>
                            <TableCell>{item.price_change_percentage_24h}</TableCell>
                            <TableCell className="text-right">${item.current_price}</TableCell>
                        </TableRow>))}
                    </TableBody>
                </ScrollArea>
            </Table>

        </>
    )
}

export default AssetTable