import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {VerifiedIcon} from "lucide-react";
import AccountVerificationForm from "./AccountVerificationForm";
import {useSelector} from "react-redux";


const Profile = () => {
    const {auth} = useSelector(store => store);

    const handleTwoStepVerification= () => {
        console.log("hello")
    };
    return (
        <div className="flex flex-col items-center mb-5">
            <div className="pt-10 w-full lg:w-[60%]">
                <Card>
                    <CardHeader className="pb-9">
                        <CardTitle>Your Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="lg:flex gap-32">
                            <div className="space-y-7">
                                <div className="flex">
                                    <p className="w-[9rem]">Email: </p>
                                    {/*if user not null then do ... */}
                                    <p className="text-gray-500">{auth.user?.email}</p>
                                </div>

                                <div className="flex">
                                    <p className="w-[9rem]">Full Name: </p>
                                    <p className="text-gray-500">{auth.user?.fullName}</p>
                                </div>

                                <div className="flex">
                                    <p className="w-[9rem]">Date of Birth: </p>
                                    <p className="text-gray-500">Trungbeso Inc.</p>
                                </div>

                                <div className="flex">
                                    <p className="w-[9rem]">Nationality: </p>
                                    <p className="text-gray-500">Trungbeso Inc.</p>
                                </div>
                            </div>

                            <div className="space-y-7">
                                <div className="flex">
                                    <p className="w-[9rem]">Email: </p>
                                    <p className="text-gray-500">{auth.user?.email}</p>
                                </div>

                                <div className="flex">
                                    <p className="w-[9rem]">Full Name: </p>
                                    <p className="text-gray-500">{auth.user?.fullName}</p>
                                </div>

                                <div className="flex">
                                    <p className="w-[9rem]">Date of Birth: </p>
                                    <p className="text-gray-500">31/2/1993</p>
                                </div>

                                <div className="flex">
                                    <p className="w-[9rem]">Nationality: </p>
                                    <p className="text-gray-500">Trungbeso Inc.</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="mt-6">
                    <Card className="w-full">
                        <CardHeader className="pb-7">
                            <div className="flex items-center align-middle gap-3">
                                <CardTitle className="pb-9">2 Step Verification</CardTitle>
                                {false ? <Badge className="bg-green-500 font-bold space-x-1">
                                    <VerifiedIcon/>
                                    <span>Enable</span>
                                </Badge> : <Badge
                                    className="bg-orange-500 font-bold text-black py-2 -translate-y-4">Disabled</Badge>}
                            </div>

                        </CardHeader>
                        <CardContent>
                            <div>
                                <Dialog>
                                    <DialogTrigger>
                                        <Button className="justify-center bg-white text-black cursor-pointer hover:bg-slate-200">Enabled Two Step Verification</Button>
                                    </DialogTrigger>
                                    <DialogContent className="bg-gray-900">
                                        <DialogHeader>
                                            <DialogTitle>Verify your account</DialogTitle>
                                        </DialogHeader>
                                        <AccountVerificationForm handleSubmit={handleTwoStepVerification}/>
                                    </DialogContent>
                                </Dialog>

                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;