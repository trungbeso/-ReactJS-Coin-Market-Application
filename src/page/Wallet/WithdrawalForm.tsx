import React from 'react';
import { Input } from '@/components/ui/input';
import {BanknoteIcon} from "lucide-react";
import { Button } from '@/components/ui/button';
import {DialogClose} from "@radix-ui/react-dialog";
import {useDispatch, useSelector} from "react-redux";
import {withdrawalRequest} from "@/State/Withdrawal/Action"

const WithdrawalForm = () => {

    const [paymentMethod, setPaymentMethod] = React.useState('')
    const [amount, setAmount] = React.useState("");
    const dispatch = useDispatch();
    const {wallet, withdrawal} = useSelector(store=>store);

    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    const handlePaymentMethodChange = (e) => {
        setAmount(e.target.value);
    }

    const handleSubmit = (e) => {
        dispatch(withdrawalRequest({amount, jwt:localStorage.getItem('jwt')}))
    }

    // const generateAccountNumber = (number: string | any[]) => {
    //     const length =number.length;
    //     const last4digit = number.slice(-4);
    //     const visibleNumber = 4;
    //     const replacedLength = length - visibleNumber;
    //
    //     const starter = '*'.repeat(replacedLength);
    //     return starter + last4digit;
    // }

    return (
        <div className="pt-5 space-y-5">
            <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4" >
                <p>Available balance</p>
                <p>$9000</p>
            </div>
            <div className="flex flex-col items-center">
                <h1>Enter withdrawal amount</h1>
                <div className="flex items-center justify-center">
                    <Input
                        onChange={handleChange}
                        value={amount}
                        className="py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center"
                        placeholder="Enter amount"
                        type="number"
                    />
                </div>
            </div>
            <div>
                <p className="pb-2">Transfer to</p>
                <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
                    <BanknoteIcon/>
                    <div>
                        <p className="p-2">{withdrawal.paymentDetails?.bankName}</p>
                        <p className="text-xs">
                            {withdrawal.paymentDetails?.accountNumber}
                        </p>
                    </div>
                </div>
            </div>
            <DialogClose className="w-full">
                <Button onClick={handleSubmit} className=" cursor-pointer w-full py-7 bg-white text-black text-lg">
                    Withdraw
                </Button>
            </DialogClose>

        </div>
    );
};

export default WithdrawalForm;