import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from '@/components/ui/button';
import PaymentDetailForm from "./PaymentDetailForm";

const PaymentDetails = () => {
    return (
        <div className="px-20">
            <h1 className="text-3xl font-bold py-10">Payment Details</h1>
            {!true ? (<Card>
                <CardHeader>
                    <CardTitle>
                        Vp Bank
                    </CardTitle>
                    <CardDescription>A/C No:
                        ***********555
                    </CardDescription>
                    <CardContent>
                        <div className="flex items-center">
                            <p className="w-32">A/C Holder:</p>
                            <p className="text-gray-500">Trung Beso</p>
                        </div>
                        <div className="flex items-center">
                            <p className="w-32">IFSC:</p>
                            <p className="text-gray-500">HN20231235</p>
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