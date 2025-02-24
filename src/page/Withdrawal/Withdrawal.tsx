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
import {getWithdrawalHistory} from "@/State/Withdrawal/Action"


const Withdrawal = () => {
    const dispatch = useDispatch();
    const {wallet, withdrawal} = useSelector(store=>store);

    useEffect(() => {
        dispatch(getWithdrawalHistory(localStorage.getItem('jwt')))
    },[]);

    return (
        <dic className="p-5 lg:p-20">

            <div className="px-20 justify-center items-center w-auto">
                <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>
                <Table className="border">
                    <TableHeader>
                        <TableRow className="bg-gray-800 rounded-tl-lg rounded-tr-lg">
                            <TableHead className="py-5">Date</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {withdrawal?.history?.map((item, index) => (<TableRow key={index}>
                            <TableCell>{item.date.toString()}</TableCell>
                            <TableCell>Banking</TableCell>
                            <TableCell className="">${item.amount}</TableCell>
                            <TableCell className="text-right">{item.status}</TableCell>

                        </TableRow>))}

                    </TableBody>
                </Table>
            </div>

        </dic>
    )
}

export default Withdrawal