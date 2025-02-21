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


const Withdrawal = () => {
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
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (<TableRow key={index}>
                            <TableCell>July 2,2016</TableCell>
                            <TableCell>SHIBA</TableCell>
                            <TableCell className="">$250.00</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>

                        </TableRow>))}

                    </TableBody>
                </Table>
            </div>

        </dic>
    )
}

export default Withdrawal