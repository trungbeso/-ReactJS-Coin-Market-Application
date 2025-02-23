import React from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {DialogClose} from "@radix-ui/react-dialog";
import {useDispatch, useSelector} from "react-redux";
import {transferMoney} from "@/State/Wallet/Action"

const TransferForm = () => {

    const dispatch = useDispatch();
    const {wallet} = useSelector(store=> store)

    const [formData, setFormData] = React.useState({
        amount: '',
        walletId: '',
        purpose: '',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = () => {
        dispatch(transferMoney({
            jwt: localStorage.getItem('jwt'),
            walletId: formData.walletId,
            reqData: {
                amount: formData.amount,
                purpose: formData.purpose,
            }
        }))
        console.log(formData);
    }

    return (
        <div className="pt-10 space-y-5">
            <div>
                <h1 className="pb-1">
                    Enter Amount
                </h1>
                <Input
                    name='amount'
                    onChange={handleChange}
                    value={formData.amount}
                    className="py-5"
                    placeholder="$234234"
                />
            </div>

            <div>
                <h1 className="pb-1">
                    Wallet Id
                </h1>
                <Input
                    name='walletId'
                    onChange={handleChange}
                    value={formData.walletId}
                    className="py-5"
                    placeholder="#234234"
                />
            </div>

            <div>
                <h1 className="pb-1">
                    Purpose
                </h1>
                <Input
                    name='purpose'
                    onChange={handleChange}
                    value={formData.purpose}
                    className="py-5"
                    placeholder="gift for your friend"
                />
            </div>
            <DialogClose className="w-full">
                <Button onClick={handleSubmit} className=" cursor-pointer w-full py-7 bg-white text-black text-lg">
                    Submit
                </Button>
            </DialogClose>


        </div>
    );
};

export default TransferForm;