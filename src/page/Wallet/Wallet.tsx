import React, {useEffect} from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {CopyIcon, CreditCardIcon, DollarSign, IdCardIcon, ShuffleIcon, UploadIcon, WalletIcon} from "lucide-react";
import {ReloadIcon, UpdateIcon} from "@radix-ui/react-icons";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import TopUpForm from "./TopUpForm.jsx";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";
import {Avatar, AvatarFallback} from "@radix-ui/react-avatar";
import {useDispatch, useSelector} from "react-redux";
import {getUserWallet} from "@/State/Wallet/Action"
import {depositMoney} from "@/State/Wallet/Action"
import {getWalletTransaction} from "@/State/Wallet/Action"
import {useLocation, useNavigate} from "react-router-dom";


function useQuery() {
    return new URLSearchParams(useLocation().search)
}

//rsc
const Wallet = () => {

    const dispatch = useDispatch();
    const {wallet} = useSelector(store=>store);
    const query = useQuery();
    const orderId = query.get("orderId");
    const paymentId = query.get("paymentId");
    const razorpayPaymentId = query.get("razorpay_payment_id")
    const navigate = useNavigate();


    useEffect(() => {
       handleFetchUserWallet();
        handleFetchWalletTransaction();
    }, []);

    useEffect(() => {
        if (orderId) {
            dispatch(depositMoney({
                jwt: localStorage.getItem("jwt"),
                orderId,
                paymentId:  paymentId || razorpayPaymentId,
                navigate
            }))
        }
    }, [orderId, paymentId, razorpayPaymentId]);

    const handleFetchUserWallet = () => {
        dispatch(getUserWallet(localStorage.getItem("jwt")))
    }

    const handleFetchWalletTransaction = () => {
        dispatch(getWalletTransaction({jwt: localStorage.getItem("jwt")}))
    }

    return (
        <div className="flex flex-col items-center">
            <div className="pt-10 w-full lg:w-[60%]">
                <Card>
                    <CardHeader className="pb-9">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-5">
                                <WalletIcon size={40}/>
                                <div>
                                    <CardTitle className="text-2xl">My Wallet</CardTitle>
                                    <div className="flex items-center gap-2">
                                        <p className="text-gray-200 text-sm">
                                            #{wallet.userWallet?.id}
                                        </p>
                                        <CopyIcon size={15} className="cursor-pointer hover:text-slate-300"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ReloadIcon onClick={handleFetchUserWallet} className="w-6 h-6 cursor-pointer hover:text-slate-300"/>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="pb-9">
                        <div className="flex items-center">
                            <DollarSign/>
                            <span className="text-2xl font-semibold">{wallet.userWallet.balance}</span>
                        </div>

                        <div className="flex gap-7 mt-5">
                            <Dialog>
                                <DialogTrigger>
                                    <div
                                        className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-700 shadow-md">
                                        <UploadIcon/>
                                        <span className="text-sm mt-2">Add money</span>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="bg-gray-900">
                                    <DialogHeader>
                                        <DialogTitle className="text-lg">
                                            Top Up your wallet
                                        </DialogTitle>
                                    </DialogHeader>
                                    <TopUpForm></TopUpForm>
                                </DialogContent>
                            </Dialog>

                            <Dialog>
                                <DialogTrigger>
                                    <div
                                        className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-700 shadow-md">
                                        <CreditCardIcon/>
                                        <span className="text-sm mt-2">Withdrawal</span>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="bg-gray-900">
                                    <DialogHeader>
                                        <DialogTitle className="text-lg">
                                            Request Withdrawal
                                        </DialogTitle>
                                    </DialogHeader>
                                    <WithdrawalForm/>
                                </DialogContent>
                            </Dialog>

                            <Dialog>
                                <DialogTrigger>
                                    <div
                                        className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-700 shadow-md">
                                        <ShuffleIcon/>
                                        <span className="text-sm mt-2">Transfer</span>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="bg-gray-900">
                                    <DialogHeader>
                                        <DialogTitle className="text-center text-lg">
                                            Transfer To Other Wallet
                                        </DialogTitle>
                                    </DialogHeader>
                                    <TransferForm/>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardContent>
                </Card>

                <div className="py-5 pt-10">
                    <div className="flex gap-2 items-center pb-5">
                        <h1 className="text-2xl font-semibold">History</h1>
                        <UpdateIcon className="h-7 w-7 p-0 cursor-pointer hover:text-gray-400"/>
                    </div>

                    <div className="space-y-5">

                        {wallet.transaction.map((item, i) => (<div key={i}>
                            <Card className=" py-2 px-5 border-gray-500 flex justify-between items-center">
                                <div className="flex items-center gap-5">
                                    <Avatar onClick={handleFetchWalletTransaction}>
                                        <AvatarFallback>
                                            <ShuffleIcon/>
                                        </AvatarFallback>
                                    </Avatar>

                                    <div className="space-y-1">
                                        <h1>{item.type || item.purpose}</h1>
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-green-500">${item.amount}</p>
                                </div>
                            </Card>
                        </div>))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
