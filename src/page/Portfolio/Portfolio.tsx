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
import {useDispatch, useSelector} from "react-redux";
import {getUserAsset} from "@/State/Asset/Action"

const Portfolio = () => {
    const{asset} = useSelector(store=>store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserAsset(localStorage.getItem("jwt")))
    }, []);

    return (
        <dic className="p-5 lg:p-20">

            <div className="px-20 justify-center items-center w-auto">

                <h1 className="font-bold text-3xl pb-5">Portfolio</h1>
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-800 rounded-tl-lg rounded-tr-lg">
                            <TableHead className="">Asset</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>UNIT</TableHead>
                            <TableHead>CHANGE</TableHead>
                            <TableHead>CHANGE%</TableHead>
                            <TableHead className="text-right">VOLUME</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {asset.userAssets.map((item, index) => (<TableRow key={index}>
                            <TableCell className="font-medium flex items-center gap-2 w-30">
                                <Avatar className="-z-50">
                                    <AvatarImage src={item.coin.image}
                                    />
                                </Avatar>
                                <span>{item.coin.name}</span>
                            </TableCell>

                            <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>{item.coin.price_change_24h}</TableCell>
                            <TableCell>{item.coin.price_change_percentage_24h}</TableCell>
                            <TableCell className="text-right">${item.coin.total_volume}</TableCell>
                        </TableRow>))}

                    </TableBody>
                </Table>
            </div>

        </dic>
    )
}

export default Portfolio