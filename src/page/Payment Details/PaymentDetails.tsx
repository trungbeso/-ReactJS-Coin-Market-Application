import React, {useEffect} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import {Button} from '@/components/ui/button';
import PaymentDetailForm from "./PaymentDetailForm";
import {useDispatch, useSelector} from "react-redux";
import {addPaymentDetails} from "@/State/Withdrawal/Action"

const PaymentDetails = () => {
    const dispatch = useDispatch();
    const {withdrawal} = useSelector(store => store);

    useEffect(() => {
        dispatch(addPaymentDetails({jwt: localStorage.getItem("jwt")}));
    }, []);

    //bring this task to backend
    const generateAccountNumber = (number: string | any[]) => {
        const length =number.length;
        const last4digit = number.slice(-4);
        const visibleNumber = 4;
        const replacedLength = length - visibleNumber;

        const starter = '*'.repeat(replacedLength);
        return starter + last4digit;
    }

    return (
        <div className="px-20">
            <h1 className="text-3xl font-bold py-10">Payment Details</h1>
            {withdrawal.paymentDetails ? (<Card>
                <CardHeader>
                    <CardTitle>
                        {withdrawal.bankName}
                    </CardTitle>
                    <CardDescription>A/C No:
                        {generateAccountNumber(withdrawal.accountNumber)}
                    </CardDescription>
                    <CardContent>
                        <div className="flex items-center">
                            <p className="w-32">A/C Holder:</p>
                            <p className="text-gray-500">{withdrawal.accountHolderName}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="w-32">IFSC:</p>
                            <p className="text-gray-500">{withdrawal.ifsc}</p>
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>):   (<Dialog>
                <DialogTrigger>
                    <Button className="mt-4 py-6 hover:bg-white hover:text-black border cursor-pointer">
                        Add Payment Details
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900">
                    <DialogHeader>
                        <DialogTitle>Payment Details</DialogTitle>
                    </DialogHeader>
                    <PaymentDetailForm/>
                </DialogContent>
            </Dialog>)}




        </div>
    );
};

export default PaymentDetails;