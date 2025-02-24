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

import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {useDispatch, useSelector} from "react-redux";
import {getAllOrdersForUser} from "@/State/Order/Action"
import {calculateProfit} from "@/utils/calculateProfit.js";

const Activity = () => {
    const dispatch = useDispatch();
    const {order} = useSelector(store=>store);

    useEffect(() => {
        dispatch(getAllOrdersForUser({jwt: localStorage.getItem('jwt')}))
    }, []);

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
                        {order.orders.map((item, index) => (<TableRow key={index}>
                            <TableCell>SHIBA</TableCell>
                            <TableCell className="font-medium flex items-center gap-2 w-30">
                                <Avatar className="-z-50">
                                    <AvatarImage src={item.orderItem.coin.image}
                                    />
                                </Avatar>
                                <span>{item.orderItem.coin.name}</span>
                            </TableCell>
                            <TableCell>{item.orderItem.buyPrice}</TableCell>
                            <TableCell>{item.orderItem.sellPrice}</TableCell>
                            <TableCell>{order.OrderType}</TableCell>
                            <TableCell>{calculateProfit(item)}</TableCell>
                            <TableCell className="text-right">{}</TableCell>

                        </TableRow>))}

                    </TableBody>
                </Table>
            </div>

        </dic>
    )
}

export default Activity